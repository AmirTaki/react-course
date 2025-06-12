import { useReducer, useState } from "react";
function App() {
  const [count, setCount] = useState (0);

  // Syntax reducer
  // const [nameState, disptach] = useReducer (nameFucntion, value);
  // function reducer(state, action) { condition action => state action.payload }
  
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer (state, action) {
      if (action.type === "increment"){
        return state + action.payload
      }

      else if (action.type === "decrement"){
        return state - action.payload
      }
  }
  return (
    <>
     <p> use State : {count}</p>
     <button onClick = {()=>{setCount(count + 1)}}>Increment</button>
     <button onClick = {()=>{setCount(count - 1)}}>ِDecrement</button>
   
      <p> use Reducer : {state}</p>
      <button onClick = {()=>{dispatch({type : 'increment', payload : 1})}}>Increment count</button>
      <button onClick = {()=>{dispatch({type : 'decrement', payload : 1})}}>Decrement count</button>
    </>
  )
}

export default App

