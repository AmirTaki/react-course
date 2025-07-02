import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function HomePage   () {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    function handelClick () {
        navigate('/dashboard/profile', {state : {username}})
    }
    return (
        <>
            yourWellcome homepage
            <br></br>
            <input 
                type="text"
                value = {username}
                onChange={(e)=>{setUsername(e.target.value)}}
            />
            <br></br>
            <button onClick={handelClick}>Go To Profile Page</button>
        </>
    )
}