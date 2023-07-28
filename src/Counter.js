import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    state = {
        counter: this.props.initialValue ?? 0,
        interval: this.props.intervalValue ?? 1000,
        increment: this.props.incrementValue ?? 1
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    counter: state.counter + this.props.incrementValue
                } 
            })
        }, this.props.intervalValue)
    }

    render() {
        return <CounterDisplay count={this.state.counter}/>
    }
}

/* Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. Is the constructor still required? */