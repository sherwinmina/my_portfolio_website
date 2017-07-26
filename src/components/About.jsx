import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router'
import {Grid, Container, Button, Divider, Segment, Image} from 'semantic-ui-react';

import '../styles/About.scss'


const Tools = () => <Container text><Grid celled='internally' columns='equal'>

    <Grid.Row  stretched>
     
      <Grid.Column >
        <h4>Front-end Framework</h4>
        <p>React</p>
        <p>Redux</p>
      </Grid.Column>
      
      <Grid.Column >
       <h4>Styling/Preprocessing</h4> 
        <p>CSS3</p> 
        <p>SCSS/SASS</p>
        <p>Smantic UI/ Material UI/ Bootstrap</p>
      </Grid.Column>
      <Grid.Column >
       <h4>Styling/Preprocessing</h4> 
        <p>CSS3</p> 
        <p>SCSS/SASS</p>
        <p>Smantic UI/ Material UI/ Bootstrap</p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column >
       <h4>Build Tools</h4> 
        <p>Webpack</p> 
        <p>Gulp</p>
      </Grid.Column>
      <Grid.Column>
        <h4>Build Tools</h4> 
        <p>Webpack</p> 
        <p>Gulp</p>
      </Grid.Column>
       <Grid.Column>
        <h4>Build Tools</h4> 
        <p>Webpack</p> 
        <p>Gulp</p>
      </Grid.Column>
     
    </Grid.Row>
  </Grid>
  </Container>;

export default class About extends Component {
  render() {
     return (
      <div  id='container'>
        <Grid reversed='mobile tablet'  stackable columns={2}>
          <Grid.Column id="left" mobile={16} tablet={16} computer={8}>
             <Image  size='medium' shape='rounded' centered bordered  src='https://cdn.vox-cdn.com/thumbor/TXkOq7bnxQ7x6czLQBWknY9NiHE=/0x0:640x480/1400x1050/cdn.vox-cdn.com/uploads/chorus_image/image/49517779/20160315-san-francisco.0.jpg' />
               
             <Container>
             <div id='tools'>Tools</div>
              <Tools/>
            </Container>
  
          </Grid.Column>


          <Grid.Column id="right" mobile={16} computer={8}>
            <div >
              <div id='headline'>Designer & Coder</div>
              <Divider/>
              <Container>
                <Image id='profile' size='small' avatar centered src='https://drive.google.com/uc?id=0By7dMnbpFyGxVjdpUE1JWEJqVmc'></Image>
              </Container>
              <p id='about'>Hello, I'm Sherwin Mina. I'm  a designer and web developer base in San Francisco, CA</p>

              <h5>Check out some of my work</h5>
              <Link to='Portfolio'>Portfolio</Link>
             
               
            </div> 
          </Grid.Column>
        </Grid>
            
       


      </div>
    );
  }
}

