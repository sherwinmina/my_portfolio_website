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
         <Switch>
           <Route exact path="/home" component={Home} />
         </Switch>

         <div className="MainContainer">
           <NavBar />
           <div className="right-container">
             <Switch>
               <Route exact path="/about" component={About} />
               <Route exact path="/" component={Portfolio} />
               <Route exact path="/contact" component={Contact} />
               <Redirect to="/" />
             </Switch>
           </div>
         </div>
       </div>;
  }
}

export default App;


