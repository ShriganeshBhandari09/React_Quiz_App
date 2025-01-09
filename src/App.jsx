import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
