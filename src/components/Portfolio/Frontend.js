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

        <Container id="box">
          <Calculator />
        </Container>

        <Container id="box">
          <Weather />
        </Container>;


        

        
        </Card.Group>
      </div>
    )
  }
}

const Calculator = () => 
  <Grid celled="internally" stackable className="box" columns={7}>
    <Grid.Row className="box">
      <Grid.Column className="left" width={7}>
        <Image
          size="large"
          src="https://drive.google.com/uc?id=0By7dMnbpFyGxdkFtQVdoNGZLZFk"
        />
      </Grid.Column>
      <Grid.Column className="right" width={9}>
        <div className="content">
          <div id="title">
            <h1>Calculator</h1>
          </div>
          <Divider />

          <h5>React Calculator</h5>
          <p>
           A simple react calculator app
          </p>

          <h4>Technologies used</h4>
         
          <li> React </li>
          <li> CSS </li>
          <li> Webpack </li>

          
          <Button.Group style={{paddingTop: '12px'}}>
            <Button attached="left">
              {" "}
              <a
                href="https://github.com/sherwinmina/Calculator-React"
                target="_blank"
              >
                Source Code
              </a>
            </Button>
            <Button attached="right">
              <a href="http://react-calculator1.surge.sh/" target="_blank">
                 Demo
              </a>

            </Button>
          </Button.Group>
          
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>

  const ImperfectProduce = () => (
  <Grid celled="internally" stackable className="box" columns={7}>
    <Grid.Row className="box">
      <Grid.Column className="left" width={7}>
        <Image
          size="large"
          src="https://drive.google.com/uc?id=0By7dMnbpFyGxMVVUdWRzR01fcW8"
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

          <Button.Group style={{ paddingTop: "12px" }}>
            <Button attached="left">
              {" "}
              <a
                href="https://github.com/sherwinmina/imperfect-produce"
                target="_blank"
              >
                Source Code
              </a>
            </Button>
            <Button attached="right">
              <a
                href="http://imperfect-produce-redesign.surge.sh/"
                target="_blank"
              >
                Demo
              </a>

            </Button>
          </Button.Group>

        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const Weather = () => (
  <Grid celled="internally" stackable className="box" columns={7}>
    <Grid.Row className="box">
      <Grid.Column className="left" width={7}>
        <Image
          size="large"
          src="https://drive.google.com/uc?id=0By7dMnbpFyGxNzlnWXJXU1NFdW8"
        />
      </Grid.Column>
      <Grid.Column className="right" width={9}>
        <div className="content">
          <div id="title">
            <h1>Weather App</h1>
          </div>
          <Divider />

          <h5>Weahter App</h5>
          <p>
            A simple Weather app 
          </p>

          <h4>Technologies used</h4>

          <li> React </li>
          <li> Redux </li>

          <li> CSS </li>
          <li> Webpack </li>
          <li> WunderGround API </li>


          <Button.Group style={{ paddingTop: "12px" }}>
            <Button attached="left">
              {" "}
              <a
                href="https://github.com/sherwinmina/Weather-chart"
                target="_blank"
              >
                Source Code
              </a>
            </Button>
            <Button attached="right">
              <a href="http://weather-chart.surge.sh/" target="_blank">
                Demo
              </a>

            </Button>
          </Button.Group>

        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);



export default Frontend;