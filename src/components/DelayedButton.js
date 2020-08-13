import React from 'react';

class DelayedButton extends React.Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         onDelayedClick: this.props.onDelayedClick,
    //         delay: this.props.delay
    //     }
    // }

    handleOnDelayedClick = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }


    render() {
        return (
            <button onClick={this.handleOnDelayedClick}>Delayed</button>
        )
    }

}

export default DelayedButton;