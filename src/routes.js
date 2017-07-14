import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="Portfolio" component={Portfolio} />
    <Route path="About" component={About} />
    <Route path="Contact" component={Contact} />
  </Route>
)
