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
// import Protected from "./routes/Protected";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { ToastContainer } from "react-toastify";
import TermsAndConditions from "./pages/TermsAndConditions";

// function PrivateRoute () {
//   if (isAuthenticated) {
//     <Outlet />
//   }

//   return <Navigate to="/login" />

// }

function App() {
  // private routing & public routing
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route
            path={"/terms-and-conditions"}
            element={<TermsAndConditions />}
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/quiz-page" element={<QuizQestionPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/quiz-questions" element={<AdminQuestionsPage />} />
          <Route path="/users" element={<AdminUsersPage />} />
          <Route
            path="/users-history/:index/:fullName"
            element={<UserHistoryPage />}
          />
          <Route
            path="/users-testlist/:index/:fullName"
            element={<UserTestListPage />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />

        {/* <Route
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
          <Protected path>
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
      /> */}
      </Routes>
    </>
  );
}

export default App;
