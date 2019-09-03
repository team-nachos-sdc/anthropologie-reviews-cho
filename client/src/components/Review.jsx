import React, { Component } from 'react';
import StarSummary from './StarSummary.jsx';
import StarRating from './StarRating.jsx';

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
            <div>{review.username}</div>
            <div>Location: <span className="light">{review.location}</span></div>
            <div>Age: <span className="light">{review.age}</span></div>
          </div>
          <div className="reviews-container review_review">
            <div><span className="review_rating"><StarRating rating={review.rating}/></span><span className="date">{review.date}</span></div>
            <div><span className="reviewTitle">{review.title}</span></div>
            <div><span className="light">{review.review}</span></div>
            <div><span className="bold">Fits: </span><span className="light">{review.fits}</span></div>
            <div><span className="bold">Size Purchased: </span><span className="light">{review.size_purchased}</span></div>
            <div><span>{review.recommends}</span></div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="reviews-grid-container">
          <div className="reviews-container review_user">
            <div>{review.username}</div>
            <div>Location: <span className="light">{review.location}</span></div>
            <div>Age: <span className="light">{review.age}</span></div>
            <div>Body Type: <span className="light">{review.body_type}</span></div>
            <div>Height: <span className="light">{review.height}</span></div>
          </div>
          <div className="reviews-container review_review">
            <div><span className="review_rating"><StarRating rating={review.rating}/></span><span className="date">{review.date}</span></div>
            <div><span className="reviewTitle">{review.title}</span></div>
            <div><span className="light">{review.review}</span></div>
            <div><span className="bold">Fits: </span><span className="light">{review.fits}</span></div>
            <div><span className="bold">Fit Purchased: </span><span className="light">{review.fit_purchased}</span></div>
            <div><span className="bold">Size Purchased: </span><span className="light">{review.size_purchased}</span></div>
            <div><span className="bold">Size Normally Worn: </span><span className="light">{review.size}</span></div>
            <div><span>{review.recommends}</span></div>
          </div>
        </div>
      )
    }

  }

}