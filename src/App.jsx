import { useReducer, useState } from "react";
function App() {
  

  // Syntax reducer
  // const [nameState, disptach] = useReducer (nameFucntion, value);
  // function reducer(state, action) { condition action => state action.payload }
  
  const [state, dispatch] = useReducer(reducer, {count : 0, incrementBy : 0});
  function reducer (state, action) {
      if (action.type === "increment"){
        return {...state, count : state.count + state.incrementBy }
      }

      if (action.type === "decrement"){
        return {...state, count : state.count - state.incrementBy }
      }
      if(action.type === "setIncrement"){
        return{...state,  incrementBy: action.paylod}
      }
  }
  return (
    <>
      <p> use Reducer : {state.count} </p>
      <input type="text" value = {state.incrementBy}  onChange={(e)=>{dispatch({type : "setIncrement", paylod : Number(e.target.value)})}}/>
      <button onClick = {()=>{dispatch({type : 'increment'})}}>Increment count</button>
      <button onClick = {()=>{dispatch({type : 'decrement'})}}>Decrement count</button>
    </>
  )
}

export default App

