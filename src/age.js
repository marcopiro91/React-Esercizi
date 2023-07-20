import React from "react"

export class Age extends React.Component {
    render() {
        return <p>{this.props.age > 18 ? `Your age is ${this.props.age}` : 'You are too young!'}</p>
    }
}

// Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.

