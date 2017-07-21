import React, { Component } from 'react';
import { Grid, Form, TextArea, Container, Divider, Input } from 'semantic-ui-react';

class Contact extends Component {
  render () {
    return (
      <Container>
        <h1 className='header'> Contact  </h1>
        <Divider></Divider>
        <h2>Say Hello</h2>

          

            <Form>
              <Form.Field control={TextArea} label='Message' placeholder='Tell us more about you...' />
            </Form>
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