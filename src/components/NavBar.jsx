import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import '../styles/NavBar.scss'

export default class Header extends Component {
  render() {
     return (
       <div>
          <div className="Navbar">
             <Link className="nav-link" to="Portfolio">Portfolio</Link>
             <Link className="nav-link" to="About">About</Link>
             <Link className="nav-link" to="Contact">Contact</Link>
          </div>
          
       </div>
    );
  }
}

const divstyles = {
   fontFamily: 'Gruppo'
}