import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import '../styles/NavBar.scss'


// import Radium, { Style } from 'radium';
import SvgIcon from 'material-ui/SvgIcon';


import ActionWork from 'material-ui/svg-icons/action/work';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionEmail from 'material-ui/svg-icons/communication/Email';
import IconButton from 'material-ui/IconButton';
import {red500, yellow500, blue500, greenA200} from 'material-ui/styles/colors';
import { Icon } from 'semantic-ui-react';


const iconStyles = {
  marginRight: 24,
  color: 'orange'
};

const linkStyle = {
 color: 'red'
}

export default class Header extends Component {
  render() {
     return (
       <div>
          <div className="Navbar">
          
          <h3 className="logo">SM</h3>
          <Link className='link' to="Home" style={linkStyle}> 
               <HomeIcon className="icon" style={iconStyles}  hoverColor={greenA200} />
              <i>Home</i>
            </Link>

            <Link className='link' to="Portfolio"> 
              <ActionWork className="icon" style={iconStyles} hoverColor={greenA200} />
              <i>Portfolio</i>
            </Link>

            <Link className='link' to="About"> 
              <ActionFace className="icon" style={iconStyles}  hoverColor={greenA200}/>
              <i>About</i>
            </Link>

            <Link className='link' to="Contact">
              <ActionEmail className="icon" style={iconStyles} hoverColor={greenA200}/>  
                <i>Contact</i>  
            </Link>

             <IconButton iconClassName="muidocs-icon-custom-github" />
          <Icon name='github' size='small' />
          <a href="">Linkedin</a>
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