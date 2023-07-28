import React from 'react';

export class ClickCounter extends React.Component {
    state = {
        counter: this.props.initialValue ?? 0
    }

    handleClick = () => {
        this.setState((prevstate) => {
            return {counter: prevstate.counter + 1}
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>click me!</button>
            </div>
        )
    }
}