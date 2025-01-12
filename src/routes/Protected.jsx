import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const user = window.localStorage.getItem("loggedInUser");
  // const admin = window.localStorage.getItem("adminLoggedIn");

  if (!user) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }
  return children;
};
Protected.propTypes;
export default Protected;
