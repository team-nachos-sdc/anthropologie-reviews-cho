import React, { Component } from 'react';

const CustomersSay = (props) => {
  switch(props.customersSay) {
    case 'True to Size':
      return (
        <div className="sizeTrue customersSay">

        </div>
      );
    case 'Runs Small':
      return (
        <div className="sizeSmall customersSay">

        </div>
      );
    case 'Runs Large':
      return (
        <div className="sizeLarge customersSay">

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