import React, { Component } from 'react'
import ClickCounter from './ClickCounter';
import Hover from './Hover';


class Parent extends Component {
  render() {
    return (
      <div>
          <h1>Higher Order Components</h1>
          < ClickCounter />
          <Hover />
      </div>
    )
  }
}

export default Parent;