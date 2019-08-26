import React, { Component } from 'react';
import StarSummary from './StarSummary.jsx';

const Summary = (props) => {
  const reviews = props.productReviews.reviews;

  return (
    <div className="flex-container">
      <div className="summary-container">
        Average Stars & Review Count Here
        {/* <StarSummary productReviews={''}/> */}
      </div>
      <div className="summary-container">% Recommended</div>
      <div className="summary-container">Customers Say Average</div>
      {reviews}
    </div>
  )
}

export default Summary;
