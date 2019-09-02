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
    if(review.category === 'bedding') {
      return(
        <div className="reviews-grid-container">
          <div className="reviews-container review_user">
            <div><span className="bold1">{review.username}</span></div>
            <div><span className="bold1">Location:</span><span>{review.location}</span></div>
            <div><span className="bold1">Age:</span><span>{review.age}</span></div>
          </div>
          <div className="reviews-container review_review">
            <div><span>{review.title}</span></div>
            <div><span>{review.review}</span></div>
            <div><span>Fits:</span><span>{review.fits}</span></div>
            <div><span>Size Purchased:</span><span>{review.size_purchased}</span></div>
            <div><span>{review.recommends}</span></div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="reviews-grid-container">
          <div className="reviews-container review_user">
            <div><span className="bold1">{review.username}</span></div>
            <div><span className="bold1">Location:</span><span>{review.location}</span></div>
            <div><span className="bold1">Age:</span><span>{review.age}</span></div>
            <div><span className="bold1">Body Type:</span><span>{review.body_type}</span></div>
            <div><span className="bold1">Height:</span><span>{review.height}</span></div>
          </div>
          <div className="reviews-container review_review">
            <div><span>{review.title}</span></div>
            <div><span>{review.review}</span></div>
            <div><span>Fits:</span><span>{review.fits}</span></div>
            <div><span>Fit Purchased:</span><span>{review.fit_purchased}</span></div>
            <div><span>Size Purchased:</span><span>{review.size_purchased}</span></div>
            <div><span>Size Normally Worn:</span><span>{review.size}</span></div>
            <div><span>{review.recommends}</span></div>
          </div>
        </div>
      )
    }

  }

}