import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Signin from "./Components/Signin"
import Signout from "./Components/Signout"
import Profile from "./Components/Profile"
import About from "./Components/About"
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Sign-in" element={<Signin/>}/>
    <Route path="/Sign-out" element={<Signout/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/About" element={<About/>}/>
   </Routes>
   </BrowserRouter>
  )
}
