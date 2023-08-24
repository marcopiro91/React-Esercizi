import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";





export function App() {
    const navigate = useNavigate()

    function handleButtonNavigate() {
        navigate('./Counter')
    }

    return (
        <div>
            <h1>Welcome to my application!</h1>
            <button onClick={handleButtonNavigate}>Enter the counter app</button>
            <GithubUser username='gianmarcotoso'/>
             <Routes>
                <Route path="/Counter" element={<Counter initialValue={1}/>} />
            </Routes> 
        </div>
    )
}


