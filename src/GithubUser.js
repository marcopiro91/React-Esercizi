
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
    const {data, error, isLoad, onRefresh} = useGithubUser(username)


    return (
        <div>
            <button onClick={onRefresh}>Refresh</button>
            {isLoad && <h1>Loading...</h1>}
            {error && <h1>Errror: {error}</h1>}
            { data && <div>
                <p>Name: {data.login}</p>
                <p>Bio: {data.bio}</p>
            </div>}
        </div>
        
    )

}