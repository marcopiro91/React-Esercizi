import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: this.props.initialValue ?? 0,
            interval: this.props.intervalValue ?? 1000,
            increment: this.props.incrementValue ?? 1
        }

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

/* Extract the h1 tag showing the count state variable into a new component called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop. */