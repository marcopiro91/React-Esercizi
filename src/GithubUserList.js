/* Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered. The usernames should be added to the array using an input field and a button. */

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


export function GithubUserList() {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('')

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    function handleButtonAddUsername() {
        setData((prevState) => [...prevState, inputValue])
    }

    



    return (
        <div>
            <input type='text' placeholder="username" value={inputValue} onChange={handleInputChange}/>
            <button onClick={handleButtonAddUsername}>Add</button>
            <ul>
                {data.map((username, index) => <Link key={index} to={`/users/${username}`}>{username}</Link>)}
            </ul>
            <Outlet />
        </div>
    )
}