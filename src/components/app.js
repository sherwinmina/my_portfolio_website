import React from 'react';
import { Component } from 'react';
import NavBar from './NavBar';

// import 'semantic-ui-css/semantic.min.css';
import '../styles/app.scss';

export default class App extends Component {
  render() {
     return (       
        <div>
            <div className="MainContainer">
            <NavBar/>
            <div className="right-container">
            {this.props.children}
            </div>
          </div>
        </div>   
    );
  }
}
