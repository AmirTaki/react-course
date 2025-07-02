import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import PageNotFound from "./pages/PageNotFound"
import Navbar from "./Navbar"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Homepage/>}  />  
        <Route path = "/dashboard" element ={<Dashboard />} > 
          <Route path = "settings" element = {<Settings />} />
          <Route path  = "profile"  element = {<Profile />}/>
        </Route>
        <Route path = "*" element = {<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

