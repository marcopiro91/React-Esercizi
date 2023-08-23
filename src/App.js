import React from "react";
import { FilteredList } from "./FilteredList";

const list = [
 {name: 'Marco', id: 1, age: 31}, 
 {name: "Liana", id: 2, age: 17},
 {name: "Francesco", id: 3, age: 19}, 
 {name: "Silvia", id: 4, age: 28}, 
]

export function App() {
    return <FilteredList list={list}/>
}


