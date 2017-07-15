import React from 'react';
import { Component } from 'react';

import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height:100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


export default class Portfolio extends Component {
  render() {
     return (
       <div>
         <h1>Porfolio</h1>
         <Paper style={style} zDepth={1} >
            <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      
    </CardText>
    <CardActions>
      <FlatButton label="Demo" />
      <FlatButton label="Source Code" />
    </CardActions>
  </Card>
          
         
         </Paper>

        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={1} />

         <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={1} />
        <Paper style={style} zDepth={1} />

      
       </div>
       
    );
  }
}
