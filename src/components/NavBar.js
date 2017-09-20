import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import '../styles/NavBar.scss'

// import Radium, { Style } from 'radium';
import { Button, Icon, Divider } from 'semantic-ui-react';


export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeItem : 'home'
    }
    
    this.handleItemClick = this.handleItemClick.bind(this);

  }

   handleItemClick(e, { name }){
     e.preventDefault();
     this.setState({ activeItem: name })
   } 


  render() {
     const { activeItem } = this.state
     console.log(activeItem)
     return (
       <div>
          <div className="Navbar">
          <h3 className="logo">SM</h3>
        
          <Link className='link' to="Home" > 
               <Icon inverted className="icon" name="browser" size='large' onClick={() =>( this.setState({ activeItem: 'home' }))} />
              <div className='label' name='home'>Home</div>
            </Link>

            <Link className='link' to="Portfolio" onClick={() =>( this.setState({ activeItem: 'portfolio' }))}> 
              <Icon inverted className="icon" name="travel" size='large' />
              <div className='label' name='portfolio'>Portfolio</div>
            </Link>

            <Link className='link' to="About" onClick={() =>( this.setState({ activeItem: 'about' }))}> 
              <Icon inverted className="icon" name="smile" size='large' />
              <div className='label' name='about' >About</div>
            </Link>

            <Link className='link' to="Contact" onClick={() =>( this.setState({ activeItem: 'contact' }))}>
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