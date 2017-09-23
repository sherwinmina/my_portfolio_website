import React, { Component } from 'react';
import {images, button} from 'react-materialize';

import Frontend from "./Frontend";
import Node from "./Node";
import FullStack from "./FullStack";
import Mobile from "./Mobile";
import Miscellaneous from "./Miscellaneous";

const All = () => {
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

export default All