import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './history'

ReactDOM.render(
  <Router><App history={history}/></Router>,
  document.getElementById('root')
);

// // index.js
// console.log(process.env);

// console.log(process.env.AUTH_CLIENT_ID);