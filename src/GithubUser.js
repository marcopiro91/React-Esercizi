import {useEffect, useState} from 'react'

/* Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}. */

export function GithubUser({username}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            return response.json()
        })
        .then(json => {
            console.log(json)
            setData(json)
        })
        .catch(error => {
            setError(error)
        })
    }, [username])

    return  <div>
                {error && <h1>ERROR!</h1>}
                {data && <h1>{data.name}, {data.location}, {data.bio}</h1>}
            </div>
}