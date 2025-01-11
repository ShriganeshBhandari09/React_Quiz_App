import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import quizLogo from "../assets/quiz-logo.png";
import profilePhoto from "../assets/profile.svg";

const AdminNavbar = ({ sidebar, setSideBar }) => {
  const navigate = useNavigate();

  const logout = () => {
    let text = "Are you sure you want to Logout?";
    if (confirm(text)) {
      localStorage.clear("loggedInUser");
      navigate("/");
    }
  };
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
        <span className="profile__name" id="profile-name"></span>
        <button type="button" className="profile__logout-btn" onClick={logout}>
          Logout
        </button>
        <img
          className="profile__img"
          src={profilePhoto}
          alt="profile-photo"
          id="profile-img"
        />
      </div>
    </header>
  );
};

export default AdminNavbar;
