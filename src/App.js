import React from "react";
import { CarDetails } from "./CarDetails";



export function App() {
    return <CarDetails initialData={{model: 'bmw', year: '2023', color: 'steel'}} />
}


