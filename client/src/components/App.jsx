import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Summary from './Summary.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productId: 2,
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
    axios //gets specified product's reviews
      .get(`/api/getOne/productId=${this.state.productId}`)
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