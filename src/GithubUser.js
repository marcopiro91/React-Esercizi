

import React, { useEffect, useState } from "react";

export function GithubUser({username}) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.log(error))
    }, [username])



    return (
        <div>
            <p>Name: {data.login}</p>
            <p>Bio: {data.bio}</p>
        </div>
        
    )

}