import React, { Component } from 'react';
import StarSummary from './StarSummary.jsx';
import Reviews from './Reviews.jsx';

const Summary = (props) => {
  const reviews = props.productReviews;
  const count = reviews.length;
  const totalRatings = reviews.reduce((sum, review) => {
    return sum + review.rating
  }, 0);
  const totalRecommends = reviews.filter((review) => {return review.recommends}).length
  const averageRating = (totalRatings/count).toFixed(1);
  const averageRecommends =`${(totalRecommends/count)*100}%`;
  return (
    <div className="grid-container">
      <div className="summary-container average_stars">
        <div className="content"><StarSummary average={averageRating} count={count}/></div>
      </div>
      <div className="summary-container average_recs">
        <div className="content">{averageRecommends} Recommended</div>
      </div>
      <div className="summary-container average_fit">
        <div className="content">Customers Say Average</div>
      </div>
      <div className="review_pag">pagination  1/1 > </div>
      <div className="reviews_component"><Reviews productReviews={props.productReviews}/></div>
      {/* {JSON.stringify(props.productReviews)} */}
    </div>
  )
}

export default Summary;
