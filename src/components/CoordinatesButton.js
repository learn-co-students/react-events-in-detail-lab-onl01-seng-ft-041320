// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    passedDown = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    render(){
        return <button onClick={this.passedDown}>BUTTON</button>
    }
}
export default CoordinatesButton;