import React, { Component } from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {
  return (
    props.productReviews.map((review, item) => {
      return <Review review={review} key={item}/>
    }) 
  )
}

export default Reviews