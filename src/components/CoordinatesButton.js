import React from 'react'

export default class CoordinatesButton extends React.Component {

    handleOnClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return <button onClick={this.handleOnClick}>Button</button>
    }
}