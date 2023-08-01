import { useState } from "react";
import { GithubUser } from "./GithubUser";

/* Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered. The usernames should be added to the array using an input field and a button. */

export function GithubUserList() {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleAddUsername = () => {
        if(inputValue !== '') {
            setData((prevstate) => [...prevstate, inputValue])
            setInputValue('')
        }
    }




    return <div>
              <input type="text" value={inputValue} onChange={handleInputChange}></input>
              <button onClick={handleAddUsername}>Add</button>
              <ul>
                {data.map((user, index) => <li key={index}><GithubUser username={user} /></li>)}
              </ul>
           </div>
}