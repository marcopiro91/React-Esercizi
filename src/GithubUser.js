
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
    const {data, error, isLoad} = useGithubUser(username)



    return (
        <div>
            {isLoad && <h1>Loading...</h1>}
            {error && <h1>Errror: {error}</h1>}
            { data && <div>
                <p>Name: {data.login}</p>
                <p>Bio: {data.bio}</p>
            </div>}
        </div>
        
    )

}