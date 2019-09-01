import React, { Component } from 'react';

const StarSummary = (props) => {
  switch(props.average){
    case '1.0':
      return(
        <div>
          {props.average} <span>|</span> {`${props.count} Reviews`}
        <div className='stars oneStar'></div>
        </div>
      );
    case '2.0':
      return(
        <div>
          {props.average} <span>|</span> {`${props.count} Reviews`}
        <div className='stars twoStar'></div>
        </div>  
      ) ;
    case '3.0':
      return(
        <div>
          {props.average} <span>|</span> {`${props.count} Reviews`}
        <div className='stars threeStar'></div>
        </div>  
      ) ;
    case '4.0':
      return(
        <div>
          {props.average} <span>|</span> {`${props.count} Reviews`}
        <div className='stars fourStar'></div>
        </div>
      ) ;
    case '5.0':
      return(
        <div>
          {props.average} <span>|</span> {`${props.count} Reviews`}
        <div className='stars fiveStar'></div>
        </div>  
      );
    default:
      return(
        <div>
          ''
        </div>  
      ); 
  }
  // return (
  //   <div>
  //     {props.average} <span>|</span> {`${props.count} Reviews`}
  //   </div>
  // )
}

export default StarSummary;