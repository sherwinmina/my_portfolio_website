import React, { Component } from 'react'
import {Button,Divider, Image} from 'semantic-ui-react';
import {Link} from 'react-router';

import '../styles/Home.scss'

class Home extends Component {
  render () {
    return (
      <div className="home">
        <div className="container">
        
        <img src='../images/Face.jpg' />
          <h1> >_ Hello, Internet</h1>
          Sherwin Mina
          <Divider></Divider>
          
          <p>  Hello Internet my name is Sherwin Mina I am a developer. Thank you for visiting my portfolio site. </p>
          <Link to="Portfolio"><Button basic inverted> Enter </Button> </Link> 
        </div>
      </div>
    )
  }
}

export default Home;