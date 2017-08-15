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

class Miscellaneous extends Component {
  render () {
    return (
      <div>
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
                      Utilizing Socket.io to host multiplayer game of Cards-Against-Humanity.
                    </p>

                    <h4>Technologies used</h4>
                   
                    <Button.Group style={{paddingTop: '12px'}}>
                      <Button attached="left">
                        {" "}
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
      </div>
    )
  }
}

export default Miscellaneous