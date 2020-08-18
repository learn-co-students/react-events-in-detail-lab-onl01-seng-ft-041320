// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  handleClick = e => {
    const [x, y] = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates([x, y])
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}
