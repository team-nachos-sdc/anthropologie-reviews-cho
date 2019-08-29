import React, { Component } from 'react';
import StarSummary from './StarSummary.jsx';

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
      <div className="summary-container stars">
        <StarSummary average={averageRating} count={count}/>
      </div>
      <div className="summary-container recs">{averageRecommends} Recommended</div>
      <div className="summary-container fit">Customers Say Average</div>
      {/* {JSON.stringify(props.productReviews)} */}
    </div>
  )
}

export default Summary;
