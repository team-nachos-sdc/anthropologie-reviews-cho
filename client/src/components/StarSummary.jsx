import React, { Component } from 'react';

const StarSummary = (props) => {
  const average = props.average.length > 1 ? props.average[0] + '.0' : props.average
  switch(average){
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
          {`'' ${JSON.stringify(props)}`}
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