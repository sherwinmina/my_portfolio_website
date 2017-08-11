import React, { Component } from 'react';
import { Grid, Form, TextArea, Container, Divider, Input, Icon, Image} from 'semantic-ui-react';
import {Button} from 'react-materialize';


class Contact extends Component {
  render () {
    return (
      <Container text  textAlign='center'>
        <h2>Say Hello</h2>
        <Divider></Divider>
        <Image fluid src='https://s-media-cache-ak0.pinimg.com/originals/80/2c/c7/802cc778a9c4550bc6ab90654d2e007b.jpg' />
        

          <p>Thank you for visiting my site. Let's get in touch.</p>
          <Icon className="iconLink" name='github' size='large'/>
          <Icon className="iconLink" name='mail outline' size='large'/>
         

          
        
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