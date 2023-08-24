import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";






export function App() {
    

    return (
        <div>
            <ul>
                <li><Link to="/Counter">Link to Counter app</Link></li>
                <li><Link to='/users/gianmarcotoso'>Link to my tutor's bio</Link></li>
                <li><Link to='/'>Homepage</Link></li>
            </ul>
            
             <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Counter" element={<Counter initialValue={1}/>} />
                <Route path="users/:username" element={<ShowGithubUser />} />
            </Routes> 
        </div>
    )
}


