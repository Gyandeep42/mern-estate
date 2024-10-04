import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signout from "./Pages/Signout"
import Profile from "./Pages/Profile"
import About from "./Pages/About"
import Header from "./Components/Header"
export default function App() {
  return (
   <BrowserRouter>
   <Header/>
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
