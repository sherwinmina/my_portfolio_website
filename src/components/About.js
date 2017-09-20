import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router'
import {Grid, Container, Button, Divider, Segment, Image, Item} from 'semantic-ui-react';

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
        <li> Bootstrap/ Semantic UI/ Material UI</li>

        <h4>Build Tools</h4> 
        <li>Webpack</li> 
        <li>Gulp</li>
    
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
      <div>
      <Grid id="right" mobile={16} tablet={16} computer={16}>
           
              <Container>
               <div id='headline'>Designer & Coder</div>
              <Divider/>
               </Container>

              <Grid  id='profile' celled='internally' columns='equal'>
                <Grid.Column >
                   <Image size='medium' floated='right' avatar src='https://drive.google.com/uc?id=0By7dMnbpFyGxVjdpUE1JWEJqVmc'></Image>
                </Grid.Column>

                <Grid.Column id='profile'>
                    <Item >

                     <Item.Content verticalAlign='middle'>
                         <h5>Check out some of my work</h5>
                    <Link to='Portfolio'><h5>Portfolio</h5></Link>
                      <h5><Link to='Contact'>Or hit me up.</Link></h5>
                    </Item.Content>
                  </Item>
                </Grid.Column>
                
              </Grid>
               
             

              <Container text id='about'>
                <p >Hello, I'm Sherwin Mina. I'm a web developer base in San Francisco, CA. I enjoy working on the front-end and UI development, but could also get my hands dirty working on the backend. My favorite go to stack are React, Redux, SCSS and Node.</p>
                <p>I'm constantly learning new technolgies and seeking new challenges</p>
              </Container>               
           
      </Grid>

        <Grid >
          <Grid id="left" mobile={16} tablet={16} computer={16}>
             <Image centered src='https://4.bp.blogspot.com/_zqFoq3qej2c/Swbj80vUe8I/AAAAAAABJ08/oKE7F_5pqIQ/s640/leaving+broadway.jpg' />
               
             <Container id='tools'>
             <h2 >Tools</h2>
             <Divider></Divider>
              <Tools/>
            </Container>
  
          </Grid>
        </Grid>
      </div>
    );
  }
}

