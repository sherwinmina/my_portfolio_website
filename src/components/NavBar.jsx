import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import '../styles/NavBar.scss'

export default class Header extends Component {
  render() {
     return (
       <div>
          <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse" >
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#" style={divstyles}>Sherwin Mina</a>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </nav>
       </div>
    );
  }
}

const divstyles = {
   fontFamily: 'Gruppo'
}