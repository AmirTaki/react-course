import { useReducer, useState } from "react";
function App() {
  

  // Syntax reducer
  // const [nameState, disptach] = useReducer (nameFucntion, value);
  // function reducer(state, action) { condition action => state action.payload }
  
  const [state, dispatch] = useReducer(reducer, {count : 0});
  function reducer (state, action) {
      if (action.type === "increment"){
        return {...state, count : state.count + action.payload }
      }

      else if (action.type === "decrement"){
        return {...state, count : state.count - action.payload }
        // return state - action.payload
      }
  }
  return (
    <>
      <p> use Reducer : {state.count}</p>
      <button onClick = {()=>{dispatch({type : 'increment', payload : 1})}}>Increment count</button>
      <button onClick = {()=>{dispatch({type : 'decrement', payload : 1})}}>Decrement count</button>
    </>
  )
}

export default App

