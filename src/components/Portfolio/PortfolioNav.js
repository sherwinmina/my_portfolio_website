import React, { Component } from 'react';
import {Link} from 'react-router';

import { Tab } from "semantic-ui-react";

import Frontend from './Frontend';
import Node from "./Node";
import FullStack from "./FullStack";
import Mobile from "./Mobile";
import Miscellaneous from "./Miscellaneous";
import All from "./All";

const PortfolioNav = () => {
    return (
      <TabExampleSecondaryPointing/>
    )
}

const panes = [
  {
    menuItem: "All Projects",
    render: () => <All/>
  },
  {
    menuItem: "Frontend",
    render: () => <Frontend/>
  },
  {
    menuItem: "Full-Stack",
    render: () => <FullStack/>
  },
  {
    menuItem: "Node",
    render: () => <Node/>
  }
  ,
  {
    menuItem: "Miscellaneous",
    render: () => <Miscellaneous/>
  }
];

const TabExampleSecondaryPointing = () => (
  <Tab
    menu={{ color: "#21649B", inverted: true, attached: false, tabular: false }}
    panes={panes}
    className="tab"
  />
);

export default PortfolioNav

const styles = {
  color: 'white'
}