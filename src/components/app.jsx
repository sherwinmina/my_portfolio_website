import React from 'react';
import { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';




import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/app.scss';

export default class App extends Component {
  render() {
     return (
        <div>
          <MuiThemeProvider>
          <div>
             <div className="MainContainer">
              <NavBar/>
              {this.props.children}
            </div>
            <Footer/>
          </div>
          </MuiThemeProvider>
      </div>
    );
  }
}
