import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import QuizPage from "./pages/quiz-page/QuizPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/quiz-page"} element={<QuizPage />} />

    </Routes>
  );
}

export default App;
