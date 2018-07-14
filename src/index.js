import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import history from './history'

ReactDOM.render(
  <Router history={history}>
    <App history={history}/>
  </Router>,
  document.getElementById('root')
);

// // index.js
// console.log(process.env);

// console.log(process.env.AUTH_CLIENT_ID);
