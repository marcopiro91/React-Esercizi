import React from "react";
import { ToDoList } from "./ToDoList"

export class App extends React.Component {
    renderItems = (items, removeItems) => {
        return items.map((item, index) => {
             return <li key={index}>{item}<button onClick={() => removeItems(index)}>Remove</button></li>
        })
    }

    render() {
        return <ToDoList render={this.renderItems}/>
    }
}


