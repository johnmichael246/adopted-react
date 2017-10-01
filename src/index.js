import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {makeMainRoutes} from './routes'
let routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById('root'));