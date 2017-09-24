import React from 'react';
import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from "./NavBar";

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';

// import 'semantic-ui-css/semantic.min.css';
import '../styles/app.scss';

class App extends Component {
  render() {
     return <div>
         <div className="MainContainer">
           <NavBar />

           <div className="right-container">
             <Switch>
                 <Route exact path="/" component={Home} id="list-page" className="transition-item" />
                 <Route exact path="/about" component={About} />
                 <Route exact path="/portfolio" component={Portfolio}  />
                 <Route exact path="/contact" component={Contact} />
                 <Redirect to="/portfolio" />
             </Switch>
           </div>
         </div>
       </div>;
  }
}

export default App;


