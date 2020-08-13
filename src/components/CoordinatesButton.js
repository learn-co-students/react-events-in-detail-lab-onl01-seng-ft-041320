import React from 'react';

class CoordinatesButton extends React.Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         onReceiveCoordinates: this.props.onReceiveCoordinates
    //     }
    // }

    handleOnClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.handleOnClick}>Coordinates</button>
        )
    }
}

export default CoordinatesButton;