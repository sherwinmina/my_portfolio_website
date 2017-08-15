import React, { Component } from 'react';
import WorkCard from './common/WorkCard';
import PortfolioNav from './Portfolio/PortfolioNav';

import {Grid, Container, Button, Icon, Divider, Card, Image } from 'semantic-ui-react';

import "../styles/Portfolio.scss";





export default class Portfolio extends Component {
  render() {
     return (
       <div className='portfolio'> 
        <div className="header"><h1>Portfolio</h1></div>
        <Divider/>
        <PortfolioNav/>      
       </div>
    );
  }
}
