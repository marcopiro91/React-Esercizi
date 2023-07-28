/* Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state. */

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

    render() {
        return <form>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}></input>
                    <input name="password"type="password" value={this.state.password} onChange={this.handleInputChange}></input>
                    <button disabled={!this.state.username || !this.state.password} onClick={this.handleButtonCLick}>submit</button>
                </form>
    }
}