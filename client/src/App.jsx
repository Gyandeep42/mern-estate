import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signup from "./Pages/signup"
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
    <Route path="/Sign-up" element={<Signup/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/About" element={<About/>}/>
   </Routes>
   </BrowserRouter>
  )
}
