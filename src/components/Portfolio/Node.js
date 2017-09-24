import React, { Component } from 'react';
import {
  Grid,
  Container,
  Button,
  Icon,
  Divider,
  Card,
  Image
} from "semantic-ui-react";


class Node extends Component {
  render () {
    return <div>
        <Card.Group>
          <Container id="box">
            <Grid celled="internally" stackable className="box" columns={7}>
              <Grid.Row className="box">
                <Grid.Column className="left" width={7}>
                  <Image size="large" src={require("../../../public/projects/chat.jpg")} />
                </Grid.Column>
                <Grid.Column className="right" width={9}>
                  <div className="content">
                    <div id="title">
                      <h1>Chat-App</h1>
                    </div>
                    <Divider />

                    <h5>A simple chat application using Socket.io</h5>
                    <p>Chat application using node</p>

                    <h4>Technologies used</h4>
                    <li> Node </li>
                    <li> express </li>
                    <li> socket.io </li>
                    <li> mocha </li>

                    <Button.Group style={{ paddingTop: "12px" }}>
                      <Button attached="left">
                        {" "}
                        <a href="https://github.com/sherwinmina/job-finder" target="_blank">
                          Source Code
                        </a>
                      </Button>
                      <Button attached="right">
                        {" "}
                        <a href="https://chat-app-websocket.herokuapp.com/" target="_blank">
                          Demo
                        </a>
                      </Button>;
                    </Button.Group>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Card.Group>
      </div>;
  }
}

export default Node;