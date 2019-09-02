import React, { Component } from 'react';

const StarRating = (props) => {
  switch(props.rating){
    case 1:
      return(
        <React.Fragment>
            <div className='stars goldstars oneStar'></div>
            <div className='stars graystars fourStar'></div>
        </React.Fragment>          
      );
    case 2:
      return(
        <React.Fragment>
            <div className='stars goldstars twoStar'></div>
            <div className='stars graystars threeStar'></div>
        </React.Fragment>          
        );
    case 3:
      return(
        <React.Fragment>
            <div className='stars goldstars threeStar'></div>
            <div className='stars graystars twoStar'></div>
        </React.Fragment>          
        );
    case 4:
      return(
        <React.Fragment>
            <div className='stars goldstars fourStar'></div>
            <div className='stars graystars oneStar'></div>
          </React.Fragment>          
        );
    case 5:
      return(
        <div className='stars goldstars fiveStar'></div>
      );
    default:
      return(
        <div>
          {`'' ${JSON.stringify(props)}`}
        </div>  
      ); 
  }
}

export default StarRating;