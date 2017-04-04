import React from 'react';
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';

export default class App extends Component {
  render() {
     return (
       <div>
        <Header/>
        <About/>
        <Portfolio/>
        <Footer/>
       </div>
    );
  }
}
