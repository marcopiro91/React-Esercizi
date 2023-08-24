import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";
import { GithubUserList } from "./GithubUserList";

/* Add a Route to the users path that shows the GihubUserList component. Modify it so that instead of showing the GithubUser component for each username entered, it shows a link to a nested route that shows the ShowGithubUser component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route. */




export function App() {
    

    return (
        <div>
            <ul>
                <li><Link to="/Counter">Link to Counter app</Link></li>
                <li><Link to='/users/gianmarcotoso'>Link to my tutor's bio</Link></li>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/users'>users list</Link></li>
            </ul>
            
             <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Counter" element={<Counter initialValue={1}/>} />
                <Route path="/users" element={<GithubUserList/>}>
                    <Route index element={<div><p>Add a user and select it</p></div>} />
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
                <Route path="*" element={<div><h1>Not Found!</h1></div>} />
            </Routes> 
        </div>
    )
}


