import React, { Component } from 'react'
import {
  Grid,
  Form,
  TextArea,
  Container,
  Divider,
  Input,
  Icon,
  Image
} from 'semantic-ui-react'
import { Button } from 'react-materialize'
import ReactCSSTransition from 'react-addons-css-transition-group'
import '../styles/All.scss'

class Contact extends Component {
  render() {
    return (
      <Container text textAlign="center">
        <ReactCSSTransition
          component="div"
          transitionName="route"
          transitionEnterTimeout={600}
          transitionEnterTimeout={600}
          transitionLeave={400}
          transitionAppear={true}
        >
          <h1>Say Hello</h1>

          <Divider />
          <Image
            fluid
            src="https://s-media-cache-ak0.pinimg.com/originals/80/2c/c7/802cc778a9c4550bc6ab90654d2e007b.jpg"
          />

          <p>Thank you for visiting my site. Let's get in touch.</p>
          <a href="https://github.com/sherwinmina" target="_blank">
            <Icon className="iconLink" name="github" size="large" />
          </a>
          <a href="mailto:sherwinmina@yahoo.com">
            <Icon className="iconLink" name="mail outline" size="large" />
          </a>
        </ReactCSSTransition>
      </Container>
    )
  }
}

export default Contact
