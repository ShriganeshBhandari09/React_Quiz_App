import { Link, useLocation, useNavigate } from "react-router";
import styles from "./Dashboard/dashboard.module.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [imgSrc, setImgSrc] = useState("src/assets/profile.svg");
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    let text = "Are you sure you want to Logout?";
    if (confirm(text)) {
      localStorage.clear("loggedInUser");
      navigate("/");
    }
  };

  const iconOnClick = () => {
    let text =
      "You’re taking a quiz! Are you sure you want to leave and lose your progress?";
    if (confirm(text)) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    setImgSrc(
      `https://ui-avatars.com/api/?name=${loggedInUser[0].fullName}&background=F3BD00&color=000`
    );
  }, [setImgSrc, loggedInUser]);

  return (
    <header className={styles.header}>
      <div className={styles.header__image_wrapper}>
        {location.pathname === "/quiz-questions" ? (
          <img
            className={styles.header__img}
            src="src/assets/quiz-logo.png"
            alt="logo"
            onClick={iconOnClick}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Link to="/dashboard">
            <img
              className={styles.header__img}
              src="src/assets/quiz-logo.png"
              alt="logo"
            />
          </Link>
        )}
      </div>
      <div className={styles.header__profileinfo}>
        <span className={styles.profile__name} id="profile-name">
          {`Welcome, ${loggedInUser[0]?.fullName}`}
        </span>
        <button
          type="button"
          className={styles.profile__logout_btn}
          onClick={logout}
        >
          Logout
        </button>
        <img
          className={styles.profile__img}
          src={imgSrc}
          alt="profile-photo"
          id="profile-img"
        />
      </div>
    </header>
  );
};

export default Navbar;
