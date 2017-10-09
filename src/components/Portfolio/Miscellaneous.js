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

class Miscellaneous extends Component {
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
          <Card.Group>
            <Container id="box">
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
                        <h1>Cards-Against-Humanity</h1>
                      </div>
                      <Divider />

                      <h5>Recreated the game Cards-Against-Humanity</h5>
                      <p>
                        Socket.io is a great tool to build browser multiplayer
                        games. Initially implemented flux architecture with
                        RX.js observables. Used gulp ease the development flow.
                      </p>

                      <h4>Technologies used</h4>
                      <li>React</li>
                      <li>Flux implementation</li>
                      <li>Node</li>
                      <li>Rxjs</li>
                      <li>Socket.Io</li>
                      <li>Gulp</li>
                      <li>Webpack</li>

                      <Button.Group style={{ paddingTop: '12px' }}>
                        <Button attached="left">
                          {' '}
                          <a
                            href="https://github.com/sherwinmina/cards-against-humanity"
                            target="_blank"
                          >
                            Source Code
                          </a>
                        </Button>
                        <Button attached="right">Demo</Button>;
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

export default Miscellaneous
