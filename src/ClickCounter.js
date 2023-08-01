import React, { useEffect, useState } from 'react';

/* Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop. */

export function ClickCounter({onCounterChange}) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        onCounterChange(counter)
    }, [counter, onCounterChange])

    function handleCounterIncrement() {
        setCounter(counter => counter + 1)
    }

    

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleCounterIncrement}>click me!</button>
        </div>
    )
}