import { useState } from "react";

export default function Form(){
    const [name, setName]  = useState({firstName : "", lastName : ""})
    function handelSubmit(e){
        e.preventDefault();
        console.log(name)
    }
    return(
        <>
        <div>
            {name.firstName} - {name.lastName}
        </div>
        <form>
            <input onChange={(e)=> setName({...name, firstName : e.target.value })} type="text" value = {name.firstName}  placeholder="enter the name"/>
            <input onChange={(e)=> setName({...name, lastName : e.target.value})} type="text" value = {name.lastName} placeholder="enter the family" />
            <button onClick={(e)=>handelSubmit(e)}>Add</button>
        </form>
        </>
    )
}
