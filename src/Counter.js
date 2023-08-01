import React from "react";

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
        return <h1>{this.state.counter}</h1>
    }
}