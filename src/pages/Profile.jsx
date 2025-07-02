import { useLocation } from "react-router-dom"

export default function Profile () {
    const location =  useLocation()
    const {username} =  location.state  || {} 
    return <>
        <br ></br>
        Profile for {username}
    </>
}