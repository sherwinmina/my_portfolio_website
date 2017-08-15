import React, { Component } from 'react';
import {Grid, Container, Button, Icon, Divider, Card, Image } from 'semantic-ui-react';

class Frontend extends Component {
  render () {
    return (
      <div>
        <Card.Group>
        <Container id='box'>
        <ImperfectProduce/>
         
        </Container>
        
        </Card.Group>
      </div>
    )
  }
}

const ImperfectProduce = () => 
  <Grid celled="internally" stackable className="box" columns={7}>
    <Grid.Row className="box">
      <Grid.Column className="left" width={7}>
        <Image
          size="large"
          src="https://marvelapp.com/static/site/images/features/prototype/prototype.png"
        />
      </Grid.Column>
      <Grid.Column className="right" width={9}>
        <div className="content">
          <div id="title">
            <h1>Imperfect Produce</h1>
          </div>
          <Divider />

          <h5>Front-end clone of the Imperfect Produce Site</h5>
          <p>
            A practice front-end copy of the current design and flow the Imperfect Produce application
          </p>

          <h4>Technologies used</h4>
         
          <li> React </li>
          <li> Semantic-UI </li>
          <li> SCSS </li>
          <li> Webpack </li>

          
          <Button.Group style={{paddingTop: '12px'}}>
            <Button attached="left">
              {" "}
              <a
                href="https://github.com/sherwinmina/imperfect-produce"
                target="_blank"
              >
                Source Code
              </a>
            </Button>
            <Button attached="right">Demo</Button>
          </Button.Group>
          
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>


export default Frontend;