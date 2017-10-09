import React, { Component } from 'react'
import { images, button } from 'react-materialize'
import ReactCSSTransition from 'react-addons-css-transition-group'

import Frontend from './Frontend'
import Node from './Node'
import FullStack from './FullStack'
import Mobile from './Mobile'
import Miscellaneous from './Miscellaneous'

import '../../styles/All.scss'

const All = () => {
  return (
    <div>
      <ReactCSSTransition
        component="div"
        transitionName="card"
        transitionEnterTimeout={600}
        transitionEnterTimeout={600}
        transitionLeave={400}
        transitionAppear={true}
      >
        <FullStack />
        <Frontend />
        <Node />
        <Mobile />
        <Miscellaneous />
      </ReactCSSTransition>
    </div>
  )
}

export default All
