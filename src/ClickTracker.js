import React from 'react';

export class ClickTracker extends React.Component {
    state = {
        lastButton: ''
    }

    render() {
        return  <div>
                    <h1>Button: {this.state.lastButton}</h1>
                    <button  onClick={this.handleButtonClick}>click me!</button>
                    <button  onClick={this.handleButtonClick}>no, click me!</button>
                    <button  onClick={this.handleButtonClick}>click meeee pleaseee</button>
                </div>
    }
    handleButtonClick = (event) => {
        this.setState({lastButton: event.target.textContent})
    }
}



/* Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event. */