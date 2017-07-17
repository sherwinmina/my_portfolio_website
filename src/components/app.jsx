import React from 'react';
import { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';



// import 'semantic-ui-css/semantic.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/app.scss';

export default class App extends Component {
  render() {
     return (
    
          <MuiThemeProvider>
          <div>
             <div className="MainContainer">
              <NavBar/>
              <div className="right-container">
              {this.props.children}
              </div>
            </div>
          </div>
          </MuiThemeProvider>
   
    );
  }
}
