import React from "react"
import {Age} from "./age"

export class Welcome extends React.Component {
    render() {
        return  <div>
                    <p>Welcome, {this.props.name}</p>    
                    { this.props.age > 18 && <Age age={this.props.age} />}
                </div>
    }
}

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18.
