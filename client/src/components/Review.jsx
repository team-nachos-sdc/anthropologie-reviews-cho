import React, { Component } from 'react';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind yo functions

  }
  //functions here
  render() {
    const { review } = this.props;
    return(
      <div>
        <div className="review_user">
          <div>{review.username}</div>
          <div>{review.location}</div>
          <div>{review.age}</div>
          <div>{review.bodyType}</div>
          <div>{review.height}</div>
        </div>
        <div className="review_review">
          Review Detail Component
        </div>
      </div>
    )
  }

}