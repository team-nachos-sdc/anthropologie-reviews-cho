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
      <div className="reviews-grid-container">
        <div className="review_user">
          {/* {review.} */}
        {JSON.stringify(review)}
        </div>
        {/* <div className="review_review"> */}
          Review Detail Component
        {/* </div> */}
      </div>
    )
  }

}