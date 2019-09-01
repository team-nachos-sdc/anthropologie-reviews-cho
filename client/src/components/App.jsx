import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Summary from './Summary.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // productId: '',
      productReviews: [],
      count: 0,
      averageRating: 0,
      averageRecommends: 0
    }
    //bind functions here
    this.loadPage = this.loadPage.bind(this);
    this.calculateAverages = this.calculateAverages.bind(this);
    // this.generateRandomProductId = this.generateRandomProductId.bind(this);
    // this.getProductReviews = this.getProductReviews.bind(this);
  }

  componentDidMount() {
    this.loadPage();
  }

  loadPage() {
    const max = 100;
    const min = 1;
    const randomProductId = Math.floor(Math.random() * (max - min + 1)) + min;
    axios //gets specified product's reviews
      .get(`/api/getOne/${randomProductId}`)
      .then((data) => {this.setState({productReviews: data.data[0].reviews})})
      .then(() => {this.calculateAverages()})
      .catch((err) => {console.log(`failed load get`)})
  }

  calculateAverages() {
    const {productReviews} = this.state;
    const totalRatings = productReviews.reduce((sum, review) => {
      return sum + review.rating
    }, 0);
    const totalRecommends = productReviews.filter((review) => {return review.recommends}).length;
    this.setState({
      count: productReviews.length,
      averageRating: (totalRatings/productReviews.length).toFixed(1),
      averageRecommends:`${(totalRecommends/productReviews.length)*100}%`
    })
  }

  //create functions heree
  render(){
    const {productReviews, count, averageRating, averageRecommends} = this.state;
    return(
      <React.Fragment>
        <h3 className='title'>Ratings & Reviews</h3>
        <Summary productReviews={productReviews} count={count} averageRecommends={averageRecommends} averageRating={averageRating}/>
      </React.Fragment>
    )
  }
}