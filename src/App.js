import React from "react";
import { ClickCounter } from "./ClickCounter"






export function App() {

    const handleCounterChange = (counterValue) => {
        console.log('Counter changed', counterValue);
    }


    return <ClickCounter onCounterChange={handleCounterChange} />
}


