import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import Portfolio from './components/Portfolio';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="Portfolio" component={Portfolio} />
  </Route>
)
