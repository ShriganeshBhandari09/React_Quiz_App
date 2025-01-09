import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'

function App() {

  return (
    <Routes>
    <Route path={"/"} element={<Login />} />
    <Route path={"/signup"} element={<Signup />} />
  </Routes>
  )
}

export default App
