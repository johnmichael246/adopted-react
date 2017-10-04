import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {makeMainRoutes} from './routes';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
// let routes = makeMainRoutes();

// ReactDOM.render(routes, document.getElementById('root'));

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));