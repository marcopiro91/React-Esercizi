import React, { useState } from "react";


export function Form() {
    const [data, setData] = useState({
        username: '',
        password: '', 
        remember: false
    })

    function handleInputCHange(event) {
        const {name, type, value, checked} = event.target

        setData((data) => {
            return {
                ...data, 
                [name]: type === 'checkbox' ? checked : value
            }
            
        })

        console.log(data)
    }

        function isDisabled() {
            return !(data.username && data.password)
        }

       


    return <form>
                <input value={data.username} name='username' onChange={handleInputCHange}/>
                <input value={data.password} type="password" name='password' onChange={handleInputCHange}/>
                <input checked={data.remember} onChange={handleInputCHange} name='remember' type='checkbox'  />
                <button disabled={isDisabled()}>Login</button>
           </form>
}