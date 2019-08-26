import React, { Component } from 'react';

const StarSummary = (props) => {
  return (
    <div>
      {props.average} <span>|</span> {`${props.count} Reviews`}
    </div>
  )
}

export default StarSummary;