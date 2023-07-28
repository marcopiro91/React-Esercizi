import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }

        setInterval(() => {
            this.setState((state) => {
                return {
                    counter: state.counter + 1
                } 
            })
        }, 1000)

    }

    render() {
        return <h1>{this.state.counter}</h1>
    }
}