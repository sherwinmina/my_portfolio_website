import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

// consider using hashHistory instead for refreshing pages

ReactDOM.render(
   <Router history={browserHistory} routes={routes} />
  , document.querySelector('.main'));
