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
import WorkCard from '../common/WorkCard'

const Frontend = () => {
  return (
    <div>
      <Card.Group>
        <Container id="box">
          <ImperfectProduce />
        </Container>

        <Container id="box">
          <Sortable />
        </Container>

        <Container id="box">
          <Calculator />
        </Container>

        <Container id="box">
          <Weather />
        </Container>
      </Card.Group>
    </div>
  )
}

const cardBuilder = (
  <Container id="box">
    <WorkCard technology="react" />
  </Container>
)

const Calculator = () => (
  <Grid celled="internally" stackable className="box" columns={7}>
    <Grid.Row className="box">
      <Grid.Column className="left" width={7}>
        <img
          size="large"
          src={require('../../../public/projects/calculator.jpg')}
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
            A great practice to manage user input and how to leverage react's
            state management to do calculation. It also touches a few window
            events that are not currently available through react synthetic
            events. This is base on Michael Jackson's react training talk.
          </p>

          <h4>Technologies used</h4>

          <li> React </li>
          <li> CSS </li>
          <li> Create-React-App</li>

          <Button.Group style={{ paddingTop: '12px' }}>
            <Button attached="left">
              {' '}
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
)

const ImperfectProduce = () => (
  <Grid celled="internally" stackable className="box" columns={7}>
    <Grid.Row className="box">
      <Grid.Column className="left" width={7}>
        <Image
          size="large"
          src={require('../../../public/projects/imperfect.jpg')}
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
            A practice front-end copy of the current design and user flow of the
            Imperfect Produce Website.
          </p>

          <h4>Technologies used</h4>

          <li> React </li>
          <li> Semantic-UI </li>
          <li> SCSS </li>
          <li> Webpack </li>

          <Button.Group style={{ paddingTop: '12px' }}>
            <Button attached="left">
              {' '}
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
)

const Sortable = () => (
  <Grid celled="internally" stackable className="box" columns={7}>
    <Grid.Row className="box">
      <Grid.Column className="left" width={7}>
        <Image
          size="large"
          src={require('../../../public/projects/sortable.jpg')}
        />
      </Grid.Column>
      <Grid.Column className="right" width={9}>
        <div className="content">
          <div id="title">
            <h1>Sortable</h1>
          </div>
          <Divider />

          <h5>A small editable and sortable widget</h5>
          <p>
            This widget is a small UI widget that responds to multiple
            scenarios. It fetches a set of list from a simple heroku api. It
            will prompt the user base on a succes or failure cases. If it is
            succesful a list is rendered to the page. The list is sortable and
            editable,a save button will conditionally render if the item has
            been manipulated. React is responding to the users actions when it
            manipulates the item it will manipulate the redux store. The user
            will then be able to save any adjustments if the list are
            re-ordered, deleted item, edited item, and added item. The UI will
            then alert the base on a succesfull save or unsuccesful event.
          </p>

          <h4>Technologies used</h4>

          <li>React</li>
          <li>Redux</li>
          <li> Semantic-UI </li>
          <li> CSS </li>
          <li> Webpack </li>

          <Button.Group style={{ paddingTop: '12px' }}>
            <Button attached="left">
              {' '}
              <a
                href="https://github.com/sherwinmina/react-assignmnet-crowdflower"
                target="_blank"
              >
                Source Code
              </a>
            </Button>
            <Button attached="right">
              <a href="http://sortable.surge.sh/" target="_blank">
                Demo
              </a>
            </Button>
          </Button.Group>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const Weather = () => (
  <Grid celled="internally" stackable className="box" columns={7}>
    <Grid.Row className="box">
      <Grid.Column className="left" width={7}>
        <Image
          size="large"
          src={require('../../../public/projects/weather-chart.jpg')}
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
            The best thing about weather apis are how robust their data
            endpoints are and how well documented they are. There are definitley
            alot of opportunities to make this app a little bigger.
            React-Sparkline are great for simple charts.
          </p>

          <h4>Technologies used</h4>

          <li> React </li>
          <li> Redux </li>

          <li> CSS </li>
          <li> Webpack </li>
          <li> WunderGround API </li>

          <Button.Group style={{ paddingTop: '12px' }}>
            <Button attached="left">
              {' '}
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
)

export default Frontend
