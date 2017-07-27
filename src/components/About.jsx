import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router'
import {Grid, Container, Button, Divider, Segment, Image} from 'semantic-ui-react';

import '../styles/About.scss'


const Tools = () => <Container text><Grid celled='internally' columns='equal'>

    <Grid.Row>
     
      <Grid.Column >
        <h4>Javascript</h4>
        <li>JQuery</li>
        <li>HTML</li>
        <li>CSS</li>

        <h4>Testing</h4>
        <li>Mocha</li>
        <li>Karma</li>
        <li>Jasmine</li>
      </Grid.Column>
      
      <Grid.Column >
       <h4>Style/Preprocessor</h4> 
        <li>CSS3</li> 
        <li>SCSS/SASS</li>
        <li>Smantic UI/ Material UI/ Bootstrap</li>
      </Grid.Column>
      <Grid.Column >
        <h4>Front-end Framework</h4>
        <li>React</li>
        <li>Redux</li>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
     <Grid.Column>
        <h4>Back-end</h4> 
        <li>Node</li> 
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Firebase</li>
      </Grid.Column>

      <Grid.Column >
       <h4>Other Useful Tools</h4> 
        <li>Git</li> 
        <li>Heroku</li>
        <li>Third party API</li>
        <li>NPM</li>
      </Grid.Column>
     
       <Grid.Column>
        <h4>Design Tools</h4> 
        <li>Adobe Photoshop</li> 
        <li>Adobe Illustrator</li>
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
             <h2 >Tools</h2>
             <Divider></Divider>
              <Tools/>
            </Container>
  
          </Grid.Column>


          <Grid.Column id="right" mobile={16} tablet={16} computer={8}>
            <div >
              <div id='headline'>Designer & Coder</div>
              <Divider/>
              <Container>
                <Image id='profile' size='small' avatar centered src='https://drive.google.com/uc?id=0By7dMnbpFyGxVjdpUE1JWEJqVmc'></Image>
              </Container>
              <p id='about'>Hello, I'm Sherwin Mina. I'm a web developer base in San Francisco, CA. I enjoy working on the front-end and UI development, but could also get my hands dirty working on the backend. My favorite go to stack are React, Redux, SCSS and Node.</p>

              <p>I'm constantly learning new technolgies and seeking new adventures</p>

              <h5>Check out some of my work</h5>
              <Link to='Portfolio'>Portfolio</Link>
              <h5>Or hit me up.</h5>

             
               
            </div> 
          </Grid.Column>
        </Grid>
            
       


      </div>
    );
  }
}

