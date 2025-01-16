import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const PublicRoutes = ({ props }) => {
  const auth = useAuth();

  return auth ? <Navigate to={"/dashboard"}></Navigate> : <Outlet />;
};

export default PublicRoutes;
