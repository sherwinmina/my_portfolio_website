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
import PropTypes from "prop-types"


const WorkCard = (props) => {
  return <div>
      <Grid celled="internally" stackable className="box" columns={7}>
        <Grid.Row className="box">
          <Grid.Column className="left" width={7}>
            <Image size="large" src={props.image} />
          </Grid.Column>
          <Grid.Column className="right" width={9}>
            <div className="content">
              <div id="title">
                <h1>{props.project}</h1>
              </div>
              <Divider />

              <h5>{props.info}</h5>
              <p>{props.description}</p>

              <h4>Technologies used</h4>

              <p>{props.technology}</p>

              <Button.Group style={{ paddingTop: "12px" }}>
                <Button attached="left">
                  {" "}
                  <a href={props.github} target="_blank">
                    Source Code
                  </a>
                </Button>
                <Button attached="right">Demo</Button>
              </Button.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>;
}
WorkCard.propTypes = {
  technology: PropTypes.string
};


export default WorkCard;