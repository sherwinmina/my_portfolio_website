import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/NavBar.scss'

// import Radium, { Style } from 'radium';
import { Button, Icon, Divider } from 'semantic-ui-react';


class NavBar extends Component {
    
  render() {
    
     return (
       <div>
          <div className="Navbar">
          <h3 className="logo">SM</h3>
        
          <Link className='link' to="/home" > 
               <Icon inverted className="icon" name="browser" size='large' />
              <div className='label' name='home'>Home</div>
            </Link>

            <Link className='link' to="/" > 
              <Icon inverted className="icon" name="travel" size='large' />
              <div className='label' name='/'>Portfolio</div>
            </Link>

            <Link className='link' to="/about" > 
              <Icon inverted className="icon" name="smile" size='large' />
              <div className='label' name='about' >About</div>
            </Link>

            <Link className='link' to="/contact" >
             <Icon inverted className="icon" name="mail" size='large' />
                <div className='label' name='contact'>Contact</div>  
            </Link>

          <div className="social">
            <Divider className='divider'/>
            <a  href='https://github.com/sherwinmina'  target="_blank">
              <Icon className="iconLink" name='github' size='large'>
              <div className='tag' >Github</div> 
            </Icon>
            </a>

            <a  href='https://codepen.io/Sherwin'  target="_blank">
              <Icon className="iconLink" name='codepen'  size='large'>
                <div className='tag'>CodePen</div>
              </Icon>
            </a>
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

export default NavBar