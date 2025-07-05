import { useState } from "react"

export default function useDisplayMessage () {
  
    const [message, setMessage] = useState('This is a message');
    
    function displayMessage (){
    console.log("display is message from display message");
  }
//   return [displayMessage]
return [message, displayMessage]

}