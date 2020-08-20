// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    
    handleClick = (e) => {
        const mousePos = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(mousePos)
    }
    
    render() {
        return (
            <button onClick={this.handleClick} >Coordinates Button</button>
        )
    }
}

export default CoordinatesButton