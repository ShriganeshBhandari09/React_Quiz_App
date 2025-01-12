import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import QuizQestionPage from "./pages/QuizQestionPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage";
import AdminQuestionsPage from "./pages/Admin/AdminQuestionsPage";
import AdminUsersPage from "./pages/Admin/AdminUsersPage";
import UserHistoryPage from "./pages/Admin/UserHistoryPage";
import UserTestListPage from "./pages/Admin/UserTestListPage";
import Protected from "./routes/Protected";
import PageNotFound from "./pages/PageNotFound";

// function PrivateRoute () {
//   if (isAuthenticated) {
//     <Outlet />
//   }

//   return <Navigate to="/login" />

// }

function App() {
  // private routing & public routing
  return (
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
      <Route path={"/signup"} element={<SignupPage />} />
      <Route
        path={"/dashboard"}
        element={
          <Protected>
            <DashboardPage />
          </Protected>
        }
      />
      <Route
        path={"/quiz-page"}
        element={
          <Protected>
            <QuizQestionPage />
          </Protected>
        }
      />
      <Route
        path={"/leaderboard"}
        element={
          <Protected>
            <LeaderboardPage />
          </Protected>
        }
      />
      <Route
        path={"/admin-dashboard"}
        element={
          <Protected>
            <AdminDashboardPage />
          </Protected>
        }
      />
      <Route
        path={"/quiz-questions"}
        element={
          <Protected>
            <AdminQuestionsPage />
          </Protected>
        }
      />
      <Route
        path={"/users"}
        element={
          <Protected>
            <AdminUsersPage />
          </Protected>
        }
      />
      <Route
        path="/users-history/:index/:fullName"
        element={
          <Protected>
            <UserHistoryPage />
          </Protected>
        }
      />
      <Route
        path="/users-testlist/:index/:fullName"
        element={
          <Protected>
            <UserTestListPage />
          </Protected>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
