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
      <div>
        Reviews Component is rendering properly
        {this.props.productReviews.map((review, i) => {
          return <div><Review review={review} key={i}/></div>
        })}
      </div>
    )
  }

}