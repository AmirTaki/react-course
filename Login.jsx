import { useContext, useState } from "react"
import { userContext } from "./src/App"

export default function Login (){
    const [value, setValue] = useState("")
    const {user, setUser}  = useContext(userContext)
    function henadleSubmit (e) {
        e.preventDefault()
        setUser(value)
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