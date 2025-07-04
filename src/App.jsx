import { UserProvider } from "./context/UserContext"
import Login from "./Login"
import Checkout from "./Checkout"
import Logout from "./Logout"

function App() {
  return (
    <UserProvider>
      <Login />
      <Checkout />
      <Logout />
    </UserProvider>
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