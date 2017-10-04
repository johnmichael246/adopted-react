import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from './Login/Login';
import LoginFacebook from './LoginFacebook/LoginFacebook';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Login/> 
        <LoginFacebook/>     
        </div>
    );
  }
}

export default App;
