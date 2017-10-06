import React, {Component} from 'react';
import {Link} from 'react-router-dom'
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

  const About = () =>{
    return <div>
        <Grid id="right" mobile={16} tablet={16} computer={16}>
          <Container>
            <div id="headline">Designer & Coder</div>
            <Divider />
          </Container>

          <Grid id="profile" celled="internally" columns="equal">
            <Grid.Column>
              <Image size="medium" floated="right" avatar src={require('../../public/Profile.jpg')} />
            </Grid.Column>

            <Grid.Column id="profile">
              <Item>
                <Item.Content verticalAlign="middle">
                  <h5>Check out some of my work</h5>
                  <Link to="Portfolio">
                    <h5>Portfolio</h5>
                  </Link>
                  <h5>
                    <Link to="Contact">Or hit me up.</Link>
                  </h5>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid>

          <Container text id="about">
            <p style={{ textIndent: '20px' }}>
              Hello, I'm Sherwin Mina. I'm a web developer base in San
              Francisco, CA. Currently working with React, Redux, Webpack
              and Node. My interests are in front-end development but I also
              like being involve in the entirety of a project.
            </p>
            <p style={{ textIndent: '20px' }}>
              I have a keen interest in graphic design, and I'm passionate
              about crafting great experiences for end-users. These
              influence all of my decisions as I work on a project, be they
              technical or aesthetic, and I'm always on the lookout for new
              ideas that can help better shape projects.
            </p>
            <p>
              Constantly learning, seeking new challenges and still in
              search for the best cheeseburger.
            </p>
          </Container>
        </Grid>

        <Grid>
          <Grid id="left" mobile={16} tablet={16} computer={16}>
            <Image centered src="/src/images/Profile.jpeg" />

            <Container id="tools">
              <h2>Tools</h2>
              <Divider />
              <Tools />
            </Container>
          </Grid>
        </Grid>
      </div>

}

export default About;