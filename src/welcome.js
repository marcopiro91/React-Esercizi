import React from "react"
import {Age} from "./age"

export class Welcome extends React.Component {
    render() {
        return  <div>
                    <p>Welcome, {this.props.name}</p>    
                    { this.props.age > 18 && this.props.age < 65 && this.props.name === 'John'  && <Age age={this.props.age} />}
                </div>
    }
}

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John".
