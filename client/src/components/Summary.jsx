import React, { Component } from 'react';
import StarSummary from './StarSummary.jsx';
import Reviews from './Reviews.jsx';
import CustomersSay from './CustomersSay.jsx';

const Summary = (props) => {

  const {averageRating, averageRecommends, count, productReviews, customersSay} = props;
  return(
    <div className="grid-container">
      <div className="summary-container average_stars">
        <div className="content"><StarSummary average={averageRating} count={count}/></div>
      </div>
      <div className="summary-container average_recs">
        <div className="content">{averageRecommends} Recommended</div>
      </div>
      <div className="summary-container average_fit">
        <div className="content">Customers say {customersSay} </div>
        <CustomersSay customersSay={customersSay}/>
      </div>
      <div className="review_pag">pagination  1/1 > </div>
      <div className="reviews_component"><Reviews productReviews={productReviews}/></div>
    </div>
  )
}

export default Summary