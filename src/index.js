import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';

import routes from './routes';

// consider using hashHistory instead for refreshing pages

ReactDOM.render(
   <Router history={hashHistory} routes={routes} />
  , document.querySelector('.main'));
