import React from "react";
import { Counter } from "./Counter"

export class App extends React.Component {
    render() {
        return <Counter initialValue = {5} intervalValue = {2000} incrementValue = {2}/>
    }
}

