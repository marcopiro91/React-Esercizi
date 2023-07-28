/* Add a "reset" button to the Login component that clears the content of all three inputs when clicked. */

import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }


    handleInputChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    }


    handleButtonCLick = () => {
        this.props.onLogin(this.state)
    }

    handleReset = () => {
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        return <form>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}></input>
                    <input name="password"type="password" value={this.state.password} onChange={this.handleInputChange}></input>
                    <button disabled={!this.state.username || !this.state.password} onClick={this.handleButtonCLick}>submit</button>
                    <button onClick={this.handleReset}>Reset</button>
                </form>
    }
}

