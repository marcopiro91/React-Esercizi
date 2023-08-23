import {useCallback, useState} from "react";

export function useCounter(initialValue=0) {
    const [count, setCount] = useState(initialValue)

    const handleButtonIncrement = useCallback(function handleButtonIncrement() {
        setCount((c) => c + 1)
    }, []) 

    const handleButtonDecrement = useCallback(function handleButtonDecrement() {
        setCount((c) => c - 1)
    }, [])

    const handleButtonReset = useCallback(function handleButtonReset() {
        setCount(initialValue)
    }, [initialValue])

    return {
        count: count,
        onIncrement: handleButtonIncrement,
        onDecrement: handleButtonDecrement,
        onReset: handleButtonReset
    }
}