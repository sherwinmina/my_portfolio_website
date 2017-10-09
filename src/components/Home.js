import React, { Component } from 'react'
import Typist from 'react-typist'
import {
  Grid,
  Container,
  Button,
  Divider,
  Segment,
  Image
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Particles from 'react-particles-js'

import '../styles/Home.scss'
import ReactCSSTransition from 'react-addons-css-transition-group'
import '../styles/All.scss'

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="home1">
          <h2 id="logo">SM</h2>

          <div id="border">
            <div className="content1">
              <Container>
                <div className="content2">
                  <ReactCSSTransition
                    component="div"
                    transitionName="route"
                    transitionEnterTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeave={400}
                    transitionAppear={true}
                  >
                    <img
                      className="photo"
                      src={require('../../public/photo.png')}
                    />

                    <Typist>
                      <p id="greeting"> >_ Hello, Internet...</p>

                      <p id="tagline">Let's Build Something together</p>
                    </Typist>
                    <Link id="enter" to="/portfolio">
                      <Particles />
                      ENTER
                    </Link>
                  </ReactCSSTransition>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
