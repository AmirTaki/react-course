import { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export default function Login () {
    const [value, setValue] = useState("")
    const [user, setUserValue] = useLocalStorage()
    function handleClick () {
        setUserValue(value)
    }
    
    return(
        <>
            <input value = {value} onChange={(e)=>setValue(e.target.value)} type="text" />
            <button onClick={handleClick}>Login</button>
        </>
    )
}