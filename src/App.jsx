import Hello from "./component/Hello"
import { Another } from "./component/Hello";
function App() {
  const seatNumbers = [1, 4, 7];
  const person =  {
    name : "amir",
    message : "Hi there !",
    emoji : "👋",
    seatNumbers : [1, 4, 7]
  }
  return (
    <>
      <div>
        <Hello 
          name = "amir"
          message = "hi there" 
          emoji = "👋"
          seatNumbers = {seatNumbers}
        />
        <Another person = {person} />
      </div>
    </>
  )
}

export default App