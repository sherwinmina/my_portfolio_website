import React, { Component } from 'react'
import {Grid, Container, Button, Divider, Segment, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import '../styles/Home.scss'
// https://drive.google.com/uc?id=0By7dMnbpFyGxVjdpUE1JWEJqVmc
class Home extends Component {
  render () {
    return (
      <div id="home">
      <div className="home1">
      <h2 id='logo'>SM</h2>
        <div id="border">
          <div className="content1">
            <Container>
           
              <div className="content2">
                  <Image className='photo' avatar size='medium' src='https://drive.google.com/uc?id=0By7dMnbpFyGxcTVwR1VlbUFIZ2c' />
                  <Divider/>
                  <p id='greeting'> >_ Hello, Internet...</p>
                  <p id='tagline'>Let's Build Something together</p>
                  <Divider/>
                  <p id='design' > DESIGN | DEVELOP | BUILD </p>
                 
                  <Link id='enter' to="Portfolio"> ENTER </Link> 
              </div>
            </Container>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Home;