import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Reviews from './Reviews.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productId: 1
    }
    //bind functions here
    this.loadPage = this.loadPage.bind(this);
  }

  componentDidMount() {
    this.loadPage();
  }
  /*
    When page loads, check URL param for productId
    When page loads, make get request based on what is in productId
  */
  getProductId() {

  }

  loadPage() {
    axios
      .get('/get')
      .then((data) => {console.log(`loaded get ${JSON.stringify(data)}`)})
      .catch((err) => {console.log(`failed load get`)})
  }

  //create functions heree
  render(){
    return(
      <div className="app">
        <Title />
        <Reviews />
      </div>
    )
  }
}