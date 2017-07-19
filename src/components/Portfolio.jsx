import React from 'react';
import { Component } from 'react';

import {Grid, Container, Button, Icon, Divider, Card, Image } from 'semantic-ui-react';

import "../styles/Portfolio.scss"




export default class Portfolio extends Component {
  render() {
     return (
       <div className='portfolio'> 
        <div className="header"><h2>Porfolio</h2></div>
         
      
        <Card.Group>
        <Container className='box'>
        <Grid celled='internally' stackable  className='box' columns={7}>
          <Grid.Row  className='box'>
            <Grid.Column className='left'  width={7}>
              <Image large src='https://marvelapp.com/static/site/images/features/prototype/prototype.png' />
            </Grid.Column>
            <Grid.Column  className='right' width={9}>
              <div className="content">
                <h1>Brew Companion</h1>
                <h3>An app that helps make brew recipes for varios style of beer</h3>
                <p>This a project is a working progress. It is a full web app for finding information with various set of tools to help you brew your beer. The app has various calculation for primimng and amount of ingredients</p>
                
                <h4>Technologies used</h4>
                <Button.Group>
                <Button attached='left'>  <a href="https://github.com/sherwinmina/Beer-Companion"  target="_blank">Source Code</a></Button>
                  <Button attached='right'>Demo</Button>
                </Button.Group>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

         <Container className='box'>
        <Grid celled='internally' stackable  className='box' columns={2}>
          <Grid.Row  className='box'>
            <Grid.Column className='left'  width={7}>
              <Image src='https://marvelapp.com/static/site/images/features/prototype/prototype.png' />
            </Grid.Column>
            <Grid.Column  className='right' width={9}>
              <div className="content">
                <h1>Brew Companion</h1>
                <h3>An app that helps make brew recipes for varios style of beer</h3>
                <p>This a project is a working progress. It is a full web app for finding information with various set of tools to help you brew your beer. The app has various calculation for primimng and amount of ingredients</p>
                
                <h4>Technologies used</h4>
                <Button.Group>
                <Button attached='left'>  <a href="https://github.com/sherwinmina/Beer-Companion"  target="_blank">Source Code</a></Button>
                  <Button attached='right'>Demo</Button>
                </Button.Group>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>


         <Container className='box'>
        <Grid celled='internally' stackable  className='box' columns={2}>
          <Grid.Row  className='box'>
            <Grid.Column className='left'  width={7}>
              <Image src='https://marvelapp.com/static/site/images/features/prototype/prototype.png' />
            </Grid.Column>
            <Grid.Column  className='right' width={9}>
              <div className="content">
                <h1>Brew Companion</h1>
                <h3>An app that helps make brew recipes for varios style of beer</h3>
                <p>This a project is a working progress. It is a full web app for finding information with various set of tools to help you brew your beer. The app has various calculation for primimng and amount of ingredients</p>
                
                <h4>Technologies used</h4>
                <Button.Group>
                <Button attached='left'>  <a href="https://github.com/sherwinmina/Beer-Companion"  target="_blank">Source Code</a></Button>
                  <Button attached='right'>Demo</Button>
                </Button.Group>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
        </Container>
        
        </Card.Group>
       
      
       </div>
       
    );
  }
}

const Layout =  {

}
