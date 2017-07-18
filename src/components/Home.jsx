import React, { Component } from 'react'
import {Button,Divider} from 'semantic-ui-react';
import {Link} from 'react-router';


import '../styles/Home.scss'

class Home extends Component {
  render () {
    return (
      <div className="home">
        <h1>Hello, Internet</h1>
        <p>Aloha</p>
        <Divider></Divider>
       
         <p>  Hello Internet my name is Sherwin Mina I am a developer. Aliquam unde tempora laborum aspernatur praesentium? Odio, sequi maxime, tenetur, natus magnam assumenda labore repellat sunt dolorem vero nesciunt eos illo molestiae. </p>
         <Link to="Portfolio"><Button basic > Welcome </Button> </Link>
      </div>
    )
  }
}

export default Home;