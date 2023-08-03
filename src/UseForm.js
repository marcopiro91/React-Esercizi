import { useState } from "react";

export function UseForm(){
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    function handleInputChange(evt){
        const { name, value } = evt.target
        setData(data => {
            return {
                ...data,
                [name]: value
            }
        })
        console.log(data)
    }

    return {
        ...data,
        handleInputChange
    }

}