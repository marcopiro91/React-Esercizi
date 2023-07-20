import React from "react"
import { Hello } from "./hello"
import { Message } from "./message"

export class App extends React.Component {
    render() {
        return <div>
                    <Hello />
                    <Message />
               </div>
    }
}