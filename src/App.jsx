import { useState } from "react"
import useDisplayMessage from "./hooks/useDisplayMessage"


function App() {
  
  // const [state] = useState()
  // const [DisplayMessage] = useDisplayMessage()
  // const message =  DisplayMessage()

  const [message, displayMessage] = useDisplayMessage()
  displayMessage()

  return (<>
    message is :  {message}
  </>)
}

export default App

