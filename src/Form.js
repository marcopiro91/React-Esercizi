import React, { useState } from "react";


export function Form() {
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    function handleInputCHange(event) {
        const {name, value} = event.target

        setData({
            [name]: value
        })
    }


    return <form>
                <input value={data.username} name='username' type='text' onChange={handleInputCHange}/>
                <input value={data.password} name="password" type='password' onChange={handleInputCHange}/>
           </form>
}