import { useState } from "react"

export default function Counter (){
    const [count, setCount] =  useState (0);
    function handlerIncrement () {
        setCount(count + 1)   
    }
    function handlerDecrement(){
        setCount(count - 1)
    }
    return (
        <>
            <h1>Count value is: {count} </h1>
            <button onClick={handlerIncrement}>Increament</button>
            <button onClick={handlerDecrement}>Decrement</button>
        </>
    )
}