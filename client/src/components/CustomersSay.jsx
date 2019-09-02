import React, { Component } from 'react';

const CustomersSay = (props) => {
  switch(props.customersSay) {
    case 'True to Size':
      return (
        <div className="sizeTrue">

        </div>
      );
    case 'Runs Small':
      return (
        <div className="sizeSmall">

        </div>
      );
    case 'Runs Large':
      return (
        <div className="sizeLarge">

        </div>
      );
    default:
      return (
        <div>

        </div>
      );       
  }
}
export default CustomersSay