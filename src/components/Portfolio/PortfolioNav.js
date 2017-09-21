import React, { Component } from 'react';
import {Tabs, Tab} from 'react-materialize';
import {Link} from 'react-router';

import Frontend from './Frontend';
import Node from "./Node";
import FullStack from "./FullStack";
import Mobile from "./Mobile";
import Miscellaneous from "./Miscellaneous";
import All from "./All";

class PortfolioNav extends Component {
  render () {
    return (
      <div>
        <Tabs className='tabs-swipe-demo blue-text text-darken-2'>
          <Tab title="All Projects" className='tab col s2 blue-text text-darken-2'>
            <All/>
          </Tab>
          <Tab title="Front-end" className='tab col s2'>
             <Frontend/>
          </Tab>
          <Tab title="Full-Stack" className='tab col s2'>
            <FullStack/>
          </Tab>
          <Tab title="Node" className='tab col s2'>
           <Node/>
          </Tab>
          <Tab title="Mobile" className='tab col s2'>
            <Mobile />
          </Tab>
          <Tab title="Miscellaneous" className='tab col s2'>
            <Miscellaneous/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default PortfolioNav