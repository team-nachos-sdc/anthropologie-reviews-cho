import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Summary from './Summary.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // productId: '',
      productReviews: []
    }
    //bind functions here
    this.loadPage = this.loadPage.bind(this);
    this.generateRandomProductId = this.generateRandomProductId.bind(this);
    // this.getProductReviews = this.getProductReviews.bind(this);
  }

  componentDidMount() {
    this.generateRandomProductId();
    // this.loadPage();
  }

  generateRandomProductId() {
    const max = 100;
    const min = 1;
    const productId = Math.floor(Math.random() * (max - min + 1)) + min;
    this.loadPage(productId);
  }
  
  loadPage(productId) {
    axios //gets specified product's reviews
      .get(`/api/getOne/${productId}`)
      .then((data) => {this.setState({productReviews: data.data[0].reviews})})
      .catch((err) => {console.log(`failed load get`)})
  }

  //create functions heree
  render(){
    return(
      <div className="app">
        <Title />
        <Summary productReviews={this.state.productReviews}/>
      </div>
    )
  }
}