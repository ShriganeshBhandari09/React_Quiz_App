import { Link, useNavigate } from "react-router";
import styles from "../container/dashboard/dashboard.module.css";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [imgSrc, setImgSrc] = useState("src/assets/profile.svg");
  const navigate = useNavigate();

  const logout = () => {
    let text = "Are you sure you want to Logout?";
    if (confirm(text)) {
      localStorage.clear("loggedInUser");
      navigate("/");
    }
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];
    setLoggedInUser(loggedInUser);
    setImgSrc(
      `https://ui-avatars.com/api/?name=${loggedInUser[0]?.fullName}&background=F3BD00&color=000`
    );
  }, [setImgSrc]);

  return (
    <header className={styles.header}>
      <div className={styles.header__image_wrapper}>
        <Link to="/dashboard">
          <img
            className={styles.header__img}
            src={assets.quizLogo}
            alt="logo"
          />
        </Link>
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
