import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Reviews from './Reviews.jsx';
import Summary from './Summary.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productId: 1,
      allProductReviews: [],
      productReviews: []
    }
    //bind functions here
    this.loadPage = this.loadPage.bind(this);
    // this.getProductReviews = this.getProductReviews.bind(this);
  }

  componentDidMount() {
    this.loadPage();
  }

  loadPage() {
    axios
      .get(`/api/getOne/productId=${this.state.productId}`)
      .then((data) => {this.setState({productReviews: data.data})})
      .catch((err) => {console.log(`failed load get`)})
  }

  //create functions heree
  render(){
    return(
      <div className="app">
        <Title />
        {/* <Summary /> */}
        <Reviews />
        {JSON.stringify(this.state.productReviews)}
      </div>
    )
  }
  /*
    When page loads, check URL param for productId
    When page loads, make get request based on what is in productId
  */
  // getProductReviews(productId) {
  //   productId = productId.toString(); //in case value is passed as number
  //   const allProductReviews = this.state.allProductReviews;
  //   const productReviews = allProductReviews.filter((productReviews) => {
  //     return productReviews.product_id === productId
  //   });
  //   this.setState({ //set state and grabs record object
  //     productReviews: productReviews[0]
  //   })
  // }

  // getProductReviews(productId) {
  //   ax
  // }
}