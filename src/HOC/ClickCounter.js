import React, { Component, useState } from 'react'

class ClickCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  render() {
    return (
      <div>
        {/* <h1>I am Click Counter</h1> */}
        <button onClick={this.incrementCount}>clicked X times</button>
      </div>
      
    )
  }
}

export default ClickCounter;
