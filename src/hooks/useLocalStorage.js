import { useState } from "react";

export default function useLocalStorage () {
    const [user, setUserValue] = useState(()=> setUser())
    function setUser (value){
        localStorage.setItem("user", value)
    }
    function getUser (){
        const user = localStorage.getItem('user')
        return user;
    }
    return [user, setUser]
}