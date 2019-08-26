import React, { Component } from 'react';
import StarSummary from './StarSummary.jsx';

const Summary = (props) => {
  const reviews = props.productReviews;
  const count = reviews.length;
  const totalRatings = reviews.reduce((sum, review) => {
    return sum + review.rating
  }, 0);
  const totalRecommends = reviews.filter((review) => {
    return review.recommends === true
  })
  const averageRating = (totalRatings/count).toFixed(1);
  const averageRecommends = totalRecommends
  // `${(totalRecommends/count).toFixed(2)}%`;
  return (
    <div className="flex-container">
      <div className="summary-container">
        <StarSummary average={averageRating} count={count}/>
      </div>
      <div className="summary-container">{totalRecommends.length} Recommended</div>
      <div className="summary-container">Customers Say Average</div>
      {JSON.stringify(props.productReviews)}
    </div>
  )
}

export default Summary;
