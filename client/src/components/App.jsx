import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Summary from './Summary.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productReviews: [],
      count: 0,
      averageRating: 0,
      averageRecommends: 0,
      customersSay: ''
    }
    //bind functions here
    this.loadPage = this.loadPage.bind(this);
    this.calculateAverages = this.calculateAverages.bind(this);
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
      .then(() => {this.calculateAverages()}) //after grabbing reviews, get all calculations 
      .catch((err) => {console.log(`failed load get`)})
  }

  calculateAverages() {
    const {productReviews} = this.state;
    const totalRatings = productReviews.reduce((sum, review) => {
      return sum + review.rating
    }, 0);
    const sizeOptions = ['XS','S','M','L','XL'];
    const checker = function() {
      var fitCheck = 0;
      for(var i = 0; i < productReviews.length; i ++) {
        var pr = productReviews[i];
        var sizeDiff = sizeOptions.indexOf(pr.size_purchased) - sizeOptions.indexOf(pr.size) // + runs big, - runs small
        if(pr.fits) {
          fitCheck += sizeDiff
        }
        if(!pr.fits && sizeDiff === 0) {
          fitCheck += -1
        }
      }
      fitCheck = fitCheck/productReviews.length
      return fitCheck < -1 ? 'Runs Small' : fitCheck >= -1 && fitCheck <= 1 ? 'True to Size' : 'Runs Large'
    }
    // const sizes = productReviews.filter((review) => {return review.size});
    const totalRecommends = productReviews.filter((review) => {return review.recommends}).length;
    this.setState({
      count: productReviews.length,
      averageRating: (totalRatings/productReviews.length).toFixed(1),
      averageRecommends:`${Math.round((totalRecommends/productReviews.length)*100)}%`,
      customersSay: checker()
    })
  }

  //create functions heree
  render(){
    const {productReviews, count, averageRating, averageRecommends, customersSay} = this.state;
    return(
      <React.Fragment>
        <h3 className='title'>Ratings & Reviews</h3>
        <Summary productReviews={productReviews} count={count} averageRecommends={averageRecommends} averageRating={averageRating} customersSay={customersSay}/>
        {JSON.stringify(this.state.productReviews)}
        <div className='sizeTrue customersSay'>dsfd</div>
      </React.Fragment>
    )
  }
}