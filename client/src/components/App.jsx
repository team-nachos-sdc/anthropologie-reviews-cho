import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blank: ''
    }
    //bind functions here

  }
  //create functions heree
  render(){
    return(
      <div>
        App component is rendering properly
      </div>
    )
  }
}