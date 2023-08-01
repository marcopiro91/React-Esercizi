import React from "react"
import { useCounter } from './useCounter'



export function Counter({initialValue = 0}) {
    const {counter, onIncrement, onDecrement, reset} = useCounter(initialValue)

   


    return <div>
              <h1>Counter: {counter}</h1>
              <button onClick={onIncrement}>Increment</button>
              <button onClick={onDecrement}>Decrement</button>
              <button onClick={reset}>Reset</button>
    </div>
}