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

    handleReset = () => {
        this.setState({todos: []})
    }

    handleRemove = (index) => {
        this.setState((state) => {
            state.todos.splice(index, 1)
            return {
                todos: state.todos
            }
        })
    }

    render() {
            return  <div>
                        <ul>
                            {this.state.todos.map((item, index) => {
                                return <li key={index}>{item}<button onClick={()=> {this.handleRemove(index)}}>remove</button></li>
                            })}
                        </ul>
                        <input ref={this._input} type="text" />
                        <button onClick={this.handleButtonClick}>Add item</button>
                        <button onClick={this.handleReset}>Reset items</button>

                    </div>
    }
}
