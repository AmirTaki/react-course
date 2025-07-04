import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"

export default function Login (){
    const [value, setValue] = useState("")
    const {user, dispatch}  = useContext(UserContext)
    function henadleSubmit (e) {
        e.preventDefault()
        // setUser(value)
        dispatch({type : "login", payload :value})
    }
    return (
        <>
        <form action="" onSubmit = {henadleSubmit}>
            <input type="text" value = {value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button type = "submit">Login</button>
        </form>
        </>
    )
}