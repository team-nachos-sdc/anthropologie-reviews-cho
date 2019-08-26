import React, { Component } from 'react';

const StarSummary = (props) => {
  const reviewsArr = props.productReviews;
  const count = JSON.parse(reviewsArr).length;
  return (
    <div>
      Start Summary component rendering properly
    </div>
  )
}

export default StarSummary;