import React, { Component } from 'react';
import {images, button} from 'react-materialize';

import Frontend from "./Frontend";
import Node from "./Node";
import FullStack from "./FullStack";
import Mobile from "./Mobile";
import Miscellaneous from "./Miscellaneous";



class All extends Component {
  render () {
    return (
      <div>
       <Frontend/>
       <FullStack/>
       <Node/>
       <Mobile/>
       <Miscellaneous/>
      </div>
    )
  }
}

export default All