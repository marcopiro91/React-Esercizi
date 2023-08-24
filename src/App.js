import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";





export function App() {
    const navigate = useNavigate()

    function handleButtonNavigate() {
        navigate('./Counter')
    }

    return (
        <div>
            <h1>Welcome to my application!</h1>
            <button onClick={handleButtonNavigate}>Enter the counter app</button>
             <Routes>
                <Route path="/Counter" element={<Counter initialValue={1}/>} />
                <Route path="users/:username" element={<ShowGithubUser />} />
            </Routes> 
        </div>
    )
}


