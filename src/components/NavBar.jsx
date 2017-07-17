import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import '../styles/NavBar.scss'


// import Radium, { Style } from 'radium';
import { Button, Icon, Divider } from 'semantic-ui-react';


export default class Header extends Component {
  render() {
     return (
       <div>
          <div className="Navbar">
          <h3 className="logo">SM</h3>
          <Link className='link' to="Home"> 
               <Icon inverted className="icon" name="browser" size='large' />
              <i>Home</i>
            </Link>

            <Link className='link' to="Portfolio"> 
              <Icon inverted className="icon" name="travel" size='large' />
              <i>Portfolio</i>
            </Link>

            <Link className='link' to="About"> 
              <Icon inverted className="icon" name="smile" size='large' />
              <i>About</i>
            </Link>

            <Link className='link' to="Contact">
             <Icon inverted className="icon" name="mail" size='large' />
                <i>Contact</i>  
            </Link>

          

          <div className="social">
            <Divider className='divider'/>
            <Icon className="iconLink" name='github' size='large'>
              <i>Github</i>
            </Icon>
            <Icon className="iconLink" name='linkedin square' size='large' />
            <Icon className="iconLink" name='facebook square'  size='large' />
            <Icon className="iconLink" name='codepen'  size='large' />
          </div>
          </div>
          
       
       </div>
    );
  }
}


const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);


const divstyles = {
   fontFamily: 'Gruppo'
}