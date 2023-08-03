import { useEffect, useState } from "react"

export function useGithubUser(username){
    let [data, setData] = useState({})

    async function fetchDataGit(username){
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (response.status === 200){
            const json = await response.json()
            setData(json)
        }
    }

    useEffect(() => {
        fetchDataGit(username)
    }, [username])

    return data
}