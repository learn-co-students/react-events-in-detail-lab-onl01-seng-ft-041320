import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    getMouseCoords = (event) => {
        let coords = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coords);
    }

    render() {
        return (
            <button onClick={this.getMouseCoords}>Coordinates</button>
        )
    }
}
