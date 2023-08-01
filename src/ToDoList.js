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
                            {this.props.render(this.state.todos, this.handleRemove)}
                        </ul>

                        <input ref={this._input} type="text" />

                        <button onClick={this.handleButtonClick}>Add item</button>

                        <button onClick={this.handleReset}>Reset items</button>

                    </div>
    }
}

/* Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array. */