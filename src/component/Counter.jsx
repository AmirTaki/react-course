import { useState } from "react"

export default function Counter (){
    const [count, setCount] =  useState (0);
    const [incrementBy, setIncrementBy] = useState(1);
    function handlerIncrement () {
        setCount(count + incrementBy)   
    }
    function handlerDecrement(){
        setCount(count - incrementBy)
    }
    function increaseIncrement () {
        setIncrementBy(incrementBy + 1)
    }
    function decreaseIncrement (){
        setIncrementBy(incrementBy - 1)
    }
    return (
        <>
            <h1>Count value is: {count} </h1>
            <button onClick={handlerIncrement}>Increament</button>
            <button onClick={handlerDecrement}>Decrement</button>

            <h1>We are incrementing the value by:{incrementBy}</h1>
            <button onClick={increaseIncrement}>Increase Increment</button>
            <button onClick={decreaseIncrement}>Decrease Increment</button>
        </>
    )
}