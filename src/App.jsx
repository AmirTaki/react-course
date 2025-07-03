import { createContext,useState  } from "react"
import Checkout from "./Checkout"
import Login from "../Login"


export const userContext = createContext("")

function App() {
  const [user, setUser] =  useState('guest')
  return (
    <>
      {/* <input type="text" value = {user}  onChange={(e)=>{setUser(e.target.value)}}/> */}
      
      <userContext.Provider value = {{user, setUser}}>
        <Login />
        <Checkout />
      </userContext.Provider>
    </>
  )
}

export default App

/*

STEPS INVOLVED WIDTH CONTEXT 


. Creating context
. Providing context
. Consuming context
. Updating contect

*/