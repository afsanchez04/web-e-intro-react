
import { Home } from "./pages/Home"
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import { Profile } from "./pages/Profile"
import { NotFound } from "./pages/NotFound"


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}
