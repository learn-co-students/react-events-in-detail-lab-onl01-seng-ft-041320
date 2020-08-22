import React from 'react'

export default class CoordinatesButton extends React.Component {

    coordinateArray = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.coordinateArray} >Get Coordinates</button>
        )
    }
}
