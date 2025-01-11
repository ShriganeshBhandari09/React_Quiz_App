import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import quizLogo from "../assets/quiz-logo.png";
import { useEffect, useState } from "react";

const AdminNavbar = ({ sidebar, setSideBar }) => {
  const [adminLoggedIn, setAdminLoggedIn] = useState([]);
  const [imgSrc, setImgSrc] = useState("src/assets/profile.svg");
  const navigate = useNavigate();

  const logout = () => {
    let text = "Are you sure you want to Logout?";
    if (confirm(text)) {
      localStorage.clear("adminLoggedIn");
      navigate("/");
    }
  };

  useEffect(() => {
    const adminLoggedIn =
      JSON.parse(localStorage.getItem("adminLoggedIn")) || [];
    setAdminLoggedIn(adminLoggedIn);
    setImgSrc(
      `https://ui-avatars.com/api/?name=${adminLoggedIn.fullName}&background=F3BD00&color=000`
    );
  }, [setImgSrc]);

  return (
    <header className="header">
      <div className="header__image-wrapper">
        <Link to="/admin-dashboard">
          <img className="header__img" src={quizLogo} alt="logo" id="logo" />
        </Link>
        <GiHamburgerMenu
          style={{ fontSize: "32px", color: "#f2be00", cursor: "pointer" }}
          onClick={() => setSideBar(!sidebar)}
        />
      </div>
      <div className="header__profileinfo">
        <span className="profile__name" id="profile-name">
          {`Welcome, ${adminLoggedIn?.fullName}`}
        </span>
        <button type="button" className="profile__logout-btn" onClick={logout}>
          Logout
        </button>
        <img
          className="profile__img"
          src={imgSrc}
          alt="profile-photo"
          id="profile-img"
        />
      </div>
    </header>
  );
};

export default AdminNavbar;
