import React, { Component } from 'react';

const StarSummary = (props) => {
  const average = props.average.length > 1 ? props.average[0] + '.0' : props.average
  switch(average){
    case '1.0':
      return(
        <React.Fragment>
          {props.average} <span>|</span> {`${props.count} Reviews`}
          <div className='starGroup'>
            <div className='goldstars oneStar'></div>
            <div className='graystars fourStar'></div>
          </div>
        </React.Fragment>          
      );
    case '2.0':
      return(
        <React.Fragment>
            {props.average} <span>|</span> {`${props.count} Reviews`}
            <div className='starGroup'>
            <div className='goldstars twoStar'></div>
            <div className='graystars threeStar'></div>
            </div>
        </React.Fragment>          
        );
    case '3.0':
      return(
        <React.Fragment>
            {props.average} <span>|</span> {`${props.count} Reviews`}
            <div className='starGroup'>
            <div className='goldstars threeStar'></div>
            <div className='graystars twoStar'></div>
            </div>
        </React.Fragment>          
        );
    case '4.0':
      return(
        <React.Fragment>
            {props.average} <span>|</span> {`${props.count} Reviews`}
            <div className='starGroup'>
            <div className='goldstars fourStar'></div>
            <div className='graystars oneStar'></div>
            </div>
          </React.Fragment>          
        );
    case '5.0':
      return(
        <div>
          {props.average} <span>|</span> {`${props.count} Reviews`}
        <div className='goldstars fiveStar'></div>
        </div>  
      );
    default:
      return(
        <div>
          {`'' ${JSON.stringify(props)}`}
        </div>  
      ); 
  }
}

export default StarSummary;