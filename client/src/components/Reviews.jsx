import React, { Component } from 'react';
import Review from './Review.jsx';

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind yo functions

  }
  //functions here
  render() {
    return(
      this.props.productReviews.map((review, item) => {
        return <Review review={review} key={item}/>
      })
    )
  }

}