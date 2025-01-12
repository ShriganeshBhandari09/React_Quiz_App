import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        alignContent: "center"
      }}
    >
      <h1 style={{ fontSize: "6rem", color: "#FF6347" }}>404</h1>
      <p style={{ fontSize: "1.5rem", color: "#555" }}>Oops! Page not found.</p>
      <Link
        to="/"
        style={{
          fontSize: "1.2rem",
          textDecoration: "none",
          color: "#007BFF",
          marginTop: "20px",
        }}
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
