import React from 'react';
import { Component } from 'react';

export default class About extends Component {
  render() {
     return (
       <div className="container-fluid" style={divStyle}>
         <div className ="row">
         <h1 className="col-md-4" style={{fontFamily: 'Megrim'}}>About Me</h1>
          <p className="col-md-8" style={{fontFamily: 'Poiret One'}}>  Hello Internet my name is Sherwin Mina I am a developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam unde tempora laborum aspernatur praesentium? Odio, sequi maxime, tenetur, natus magnam assumenda labore repellat sunt dolorem vero nesciunt eos illo molestiae. </p> 
        </div>
       </div>
    );
  }
}

const divStyle = {
  fontFamily: 'Grupo',
  backgroundColor: 'grey',
  paddingTop: '40px'
}
