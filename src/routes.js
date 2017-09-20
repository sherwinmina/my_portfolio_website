import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home';


export default (
  <div>
    <Route path="Home" component={Home} />
    <Switch path="/" component={App}>
      <Route exact component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  </div>
  
)
