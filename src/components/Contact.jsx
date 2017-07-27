import React, { Component } from 'react';
import { Grid, Form, TextArea, Container, Divider, Input, Icon } from 'semantic-ui-react';
import {Button} from 'react-materialize';


class Contact extends Component {
  render () {
    return (
      <Container>
        <h2>Say Hello</h2>
        <Divider></Divider>

          <p>Thank you for visiting my site. Let's get in touch</p>
          <Icon className="iconLink" name='github' size='huge'/>
          <Icon className="iconLink" name='mail outline' size='huge'/>
          <Icon className="iconLink" name='github' size='huge'/>

          
        
      </Container>
    )
  }
}

export default Contact


// <Form action="mailto:sherwinmina@yahoo.com" method="post" enctype="text/plain">
//            Name:
//             <Input type="text" name="name"/>
//             E-mail:
//             <Input type="text" name="mail"/>
//             Comment:
//             <Input type="text" name="comment" size="50"/>
//             <Input type="submit" value="Send"/>
//             <Input type="reset" value="Reset"/>

// </Form>  