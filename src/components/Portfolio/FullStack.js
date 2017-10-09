import React, { Component } from 'react'
import {
  Grid,
  Container,
  Button,
  Icon,
  Divider,
  Card,
  Image
} from 'semantic-ui-react'

import ReactCSSTransition from 'react-addons-css-transition-group'
import '../../styles/All.scss'

class Frontend extends Component {
  render() {
    return (
      <div>
        <ReactCSSTransition
          component="div"
          transitionName="card"
          transitionEnterTimeout={600}
          transitionEnterTimeout={600}
          transitionLeave={400}
          transitionAppear={true}
        >
          <Beer />
          <Nba />
          <Card.Group>
            <Container id="box">
              <Grid celled="internally" stackable className="box" columns={7}>
                <Grid.Row className="box">
                  <Grid.Column className="left" width={7}>
                    <Image
                      size="large"
                      src={require('../../../public/projects/todo.jpg')}
                    />
                  </Grid.Column>
                  <Grid.Column className="right" width={9}>
                    <div className="content">
                      <div id="title">
                        <h1>React To-Do</h1>
                      </div>
                      <Divider />

                      <h5>A To do app</h5>
                      <p>A serverless implementation of a to do app</p>

                      <h4>Technologies used</h4>
                      <li> React </li>
                      <li> Redux </li>
                      <li> Webpack </li>
                      <li> firebase </li>
                      <li> OAuth </li>

                      <Button.Group style={{ paddingTop: '12px' }}>
                        <Button attached="left">
                          {' '}
                          <a
                            href="https://github.com/sherwinmina/ReactToDo"
                            target="_blank"
                          >
                            Source Code
                          </a>
                        </Button>
                        <Button attached="right">
                          <a
                            href="http://react-todo-app1.herokuapp.com/"
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
            </Container>
          </Card.Group>
        </ReactCSSTransition>
      </div>
    )
  }
}

const Beer = () => (
  <Container id="box">
    <Grid celled="internally" stackable className="box" columns={7}>
      <Grid.Row className="box">
        <Grid.Column className="left" width={7}>
          <Image
            size="large"
            src={require('../../../public/projects/beer-companion.jpg')}
          />
        </Grid.Column>
        <Grid.Column className="right" width={9}>
          <div className="content">
            <div id="title">
              <h1>Beer-Companion</h1>
            </div>
            <Divider />

            <h5>An ongoing Full-Stack Project for beer lovers</h5>
            <p>
              This project is both a website an a web app. There are several
              feature in this application to educate beer drinkers. It includes
              a brewery locator base on your location. A brew calculator and in
              the future would like to hook up mongoDB or firebase to save your
              favorite beers.
            </p>

            <h4>Technologies used</h4>
            <li> React </li>
            <li> React-Router V4 </li>
            <li> Redux </li>
            <li> Webpack </li>
            <li>Node</li>
            <li>Yelp API</li>
            <li>BreweryDB API</li>

            <Button.Group style={{ paddingTop: '12px' }}>
              <Button attached="left">
                {' '}
                <a
                  href="https://github.com/sherwinmina/Beer-Companion"
                  target="_blank"
                >
                  Source Code
                </a>
              </Button>
              <Button attached="right">
                <a href="http://beer-companion.surge.sh/" target="_blank">
                  Demo
                </a>
              </Button>
            </Button.Group>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

const Nba = () => (
  <Container id="box">
    <Grid celled="internally" stackable className="box" columns={7}>
      <Grid.Row className="box">
        <Grid.Column className="left" width={7}>
          <Image
            size="large"
            src={require('../../../public/projects/nba-app.jpg')}
          />
        </Grid.Column>
        <Grid.Column className="right" width={9}>
          <div className="content">
            <div id="title">
              <h1>NBA-APP</h1>
            </div>
            <Divider />

            <h5>An NBA app that keeps you up to date with games and stats.</h5>
            <p>
              The front end is currently being serve on surge and the Node
              Proxy/API server is on Heroku. Currently looking for free sports
              API. Managed to scrape the internet for various api endpoints.
            </p>

            <h4>Technologies used</h4>
            <li> React </li>
            <li> Sass </li>
            <li> Material UI </li>
            <li> Redux </li>
            <li> Webpack </li>
            <li> NodeJs </li>
            <li> OAuth </li>
            <li> Jest </li>

            <Button.Group style={{ paddingTop: '12px' }}>
              <Button attached="left">
                {' '}
                <a
                  href="https://github.com/sherwinmina/NBA-APP"
                  target="_blank"
                >
                  Source Code
                </a>
              </Button>
              <Button attached="right">
                <a href="http://nba-app.surge.sh/" target="_blank">
                  Demo
                </a>
              </Button>
            </Button.Group>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Frontend
