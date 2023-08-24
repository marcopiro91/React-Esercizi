import  useSWR  from "swr"

const fetcher = url => fetch(url).then(response => response.json())

export function useGithubUser(username){
    const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}`: null, fetcher)

   function handleRefreshData(){
     mutate()
   }

    return {
        data: data,
        error,
        isLoad: !data && !error,
        onRefresh: handleRefreshData
    }
}

