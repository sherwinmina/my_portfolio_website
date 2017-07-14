import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import '../styles/NavBar.scss'

import ActionWork from 'material-ui/svg-icons/action/work';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionEmail from 'material-ui/svg-icons/communication/Email';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
  alignItems: 'center',
  color: 'orange',
    
    ':hover': {
      background: 'white'
    }

  
};
export default class Header extends Component {
  render() {
     return (
       <div>
          <div className="Navbar">
            <Link className='link' to="Portfolio"> 
              <ActionWork className="icon" style={iconStyles} />
              <i>Portfolio</i>
            </Link>

            <Link className='link' to="About"> 
              <ActionFace className="icon" style={{color:'red'}}  />
              <i>About</i>
            </Link>

            <Link className='link' to="Contact">
              <ActionEmail className="icon" style={iconStyles} />  
                <i>Contact</i>  
            </Link>
          </div>
       
       </div>
    );
  }
}

const divstyles = {
   fontFamily: 'Gruppo'
}