
import React, { useEffect, useState } from "react";


export function Counter(){
    let [counter, setCounter] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setCounter(c => c + 1)
        }, 1000)
        return () => {clearInterval(id)}
    }, [])

    return <h1>{counter}</h1>
}