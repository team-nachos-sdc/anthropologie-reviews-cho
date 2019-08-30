import React, { Component } from 'react';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind yo functions

  }
  //functions here
  render() {
    return(
      <div>
        {JSON.stringify(this.props.review)}}
      </div>
    )
  }

}