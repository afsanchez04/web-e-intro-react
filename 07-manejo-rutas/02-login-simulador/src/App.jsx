import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { UserProfile } from "./pages/UserProfile"


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/user:id" element={<UserProfile />}/>
    </Routes>
  )
}
