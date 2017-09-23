import React, { Component } from "react";
import {
  Grid,
  Container,
  Button,
  Icon,
  Divider,
  Card,
  Image
} from "semantic-ui-react";

const  Frontend = () => {
    return (
      <div>
        <Card.Group>
          <Container id="box">
            <Grid celled="internally" stackable const Name="box" columns={7}>
              <Grid.Row className="box">
                <Grid.Column className="left" width={7}>
                  <Image
                    size="large"
                    src="https://drive.google.com/uc?id=0By7dMnbpFyGxTjBId3pWZ2JCNEE"
                  />
                </Grid.Column>
                <Grid.Column className="right" width={9}>
                  <div className="content">
                    <div id="title">
                      <h1>Job-Finder</h1>
                    </div>
                    <Divider />

                    <h5>A React Native App</h5>
                    <p>
                     An application that uses the uses the indeed api to map the job location into Google maps.
                    </p>

                    <h4>Technologies used</h4>
                    <li> React </li>
                    <li> React Native </li>
                    <li> Redux </li>
                    <li>Axios </li>
                    <li>Exponent </li>
                    <li> Google Api </li>
                    <li> Indeed Api </li>

                    
                    <div  style={{paddingTop: '12px'}}>
                      <Button>
                        {" "}
                        <a href="https://github.com/sherwinmina/job-finder" target="_blank">
                          Source Code
                        </a>
                      </Button>

                    </div>
                    
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Container>
        </Card.Group>
      </div>
    );
}

export default Frontend;
