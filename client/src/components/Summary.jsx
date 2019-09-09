import React, { Component } from 'react';
import StarSummary from './StarSummary.jsx';
import Reviews from './Reviews.jsx';
import CustomersSay from './CustomersSay.jsx';

const Summary = (props) => {

  const {averageRating, averageRecommends, count, productReviews, customersSay} = props;
  return(
    <div className="grid-container">
      <div className="summary-container average_stars">
        <div className="summaryContent"><StarSummary average={averageRating} count={count}/></div>
      </div>
      <div className="summary-container average_recs">
        <div className="summaryContent">{averageRecommends} Recommended</div>
        <div className="check"></div>
      </div>
      <div className="summary-container average_fit">
        <div className="summaryContent">Customers say {customersSay}<CustomersSay customersSay={customersSay}/></div>
      </div>
      <div className="review_pag"><span className="pag_span"><div className="leftPag pag_arrows"></div> 1 / 1 <div className="rightPag pag_arrows"></div></span></div>
      <div className="reviews_component"><Reviews productReviews={productReviews}/></div>
    </div>
  )
}

export default Summary