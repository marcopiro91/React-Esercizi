import React from "react";
import { useCounter } from "./useCounter";
import { useNavigate } from "react-router-dom";

export function Counter({initialValue=0}) {
    const {count, onIncrement, onDecrement, onReset} = useCounter(initialValue)
    const navigate = useNavigate()

    function handleButtonNavigate() {
        navigate('/')
    }


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={handleButtonNavigate}>Homepage</button>
        </div>
    )
}