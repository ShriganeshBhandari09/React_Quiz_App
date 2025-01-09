import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsersRequest } from "../../../store/users/userActions";
import { assets } from "../../../assets/assets";
import styles from "../login.module.css"


const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify([
          { fullName: "Admin", email: email, password: password },
        ])
      );
      navigate("/admin-dashboard");
      alert("Login Successfull");
      return;
    }

    const loggedInUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify([loggedInUser]));
      navigate("/dashboard");
      alert("Login Successfull");
      return;
    } else {
      alert("Incorrect email or password");
      return;
    }
  };
  return (
    <section className={`${styles.auth} ${styles.container}`}>
      <div className={`${styles.auth__img_wrapper}`}>
        <img className={styles.auth__img} src={assets.login} alt="" />
      </div>
      <div className={styles.auth__form_container}>
        <div className={styles.auth__form_header}>
          <h1 className={styles.auth__form_heading}>Login</h1>
          <span className={styles.auth__form_description}>
            Please Enter your details below
          </span>
        </div>
        <form className={styles.auth__form} onSubmit={handleSubmit}>
          <div className={styles.auth__form_div}>
            <label className={styles.auth__form_label}>Email Id*</label>
            <input
              className={styles.auth__form_input}
              type="email"
              name="email"
              id="loginemail"
              placeholder="Email"
              required
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.auth__form_div}>
            <label className="auth__form_label">Password*</label>
            <input
              className={styles.auth__form_input}
              type="password"
              name="password"
              id="loginpassword"
              placeholder="Password"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className={`${styles.primary_btn} ${styles.login_btn}`}
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          className={`${styles.secondary_btn} ${styles.google_btn}`}
          type="button"
        >
          <img
            className={styles.secondary__btn_img}
            src="src/assets/google.svg"
            alt="google-img"
          />
          Sign up with Google
        </button>
        <span className={styles.auth__span}>
          Don&apos;t have an account?<Link to={"/signup"}>Signup</Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
