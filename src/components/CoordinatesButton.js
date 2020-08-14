import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleOnClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render () {
    return (
      <button onClick={this.handleOnClick} />
    )
  }
}

//
//
// Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
//
// Pass this event data in as the argument for the onReceiveCoordinates prop.
//
// If successful, the current x,y position of your mouse should be logged.
