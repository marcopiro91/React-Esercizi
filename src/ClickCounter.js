import React, { useState } from 'react';

/* export class ClickCounter extends React.Component {
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
} */

export function ClickCounter() {
    const [count, setCount] = useState(0)

    function handleButtonClick() {
        setCount((num) => num + 1)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleButtonClick}>click me!</button>
        </div>
    )
}