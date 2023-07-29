import React from "react";

export class ToDoList extends React.Component {
    _input = React.createRef()
    state = {
        todos: [
            "sleep",
            "Do homework",
            "go to movies"
        ]
    }

    handleButtonClick = () => {
        this.setState((state) => {
            const value = this._input.current.value
            this._input.current.value = ""
            return {
                todos: [...state.todos, value]
            }
        })
    }

    render() {
            return  <div>
                        <ul>
                            {this.state.todos.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                        <input ref={this._input} type="text" />
                        <button onClick={this.handleButtonClick}>Add item</button>
                    </div>
    }
}
