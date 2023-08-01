import { useState } from 'react'

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter((value) => value + 1)
    }

    function handleCounterDecrement() {
        setCounter((value) => value + -1)
    }

    function handleCounterReset() {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        reset: handleCounterReset
    }
}
