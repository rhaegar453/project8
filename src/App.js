import React, {Component} from 'react';
import Navigation from './Components/Navigation';
import Body from './Components/Body';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navigation/>
        <Body/>
      </div>
    );
  }
}