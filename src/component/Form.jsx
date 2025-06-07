import { useState } from "react";

export default function Form(){
    const [name, setName]  = useState("")
    function handlerChange (e){
        console.log("Change occured");
        console.log(e.target.value)
        setName(e.target.value)
    }
    return(
        <>
            <input onChange={(e)=> handlerChange(e)} type="text" value = {name}   />
        </>
    )
}
/*
 onChange={function demo(e) {
    return handlerChange(e)
                      
 }}
*/