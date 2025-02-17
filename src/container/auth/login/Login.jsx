import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsersRequest } from "../../../store/users/userActions";
import { assets } from "../../../assets/assets";
import styles from "../login.module.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = "Please enter email";
    }
    if (!password) {
      errors.password = "Please Enter Password";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ fullName: "Admin", email: email, password: password })
      );
      navigate("/admin-dashboard");
      alert("Login Successfull");
      return;
    }

    if (validate()) {
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
    }
  };
  return (
    <>
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="shapes"></div>
        </div>
      ) : (
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
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
              </div>
              <div className={styles.auth__form_div}>
                <label className="auth__form_label">Password*</label>
                <div
                  className={styles.auth__form_input}
                  style={{ display: "flex" }}
                >
                  <input
                    className={styles.auth__form_input_password}
                    type={passwordToggle ? "text" : "password"}
                    name="password"
                    id="loginpassword"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordToggle ? (
                    <FaEyeSlash
                      onClick={() => setPasswordToggle(!passwordToggle)}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <FaEye
                      onClick={() => setPasswordToggle(!passwordToggle)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
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
                src={assets.google}
                alt="google-img"
              />
              Sign up with Google
            </button>
            <span className={styles.auth__span}>
              Don&apos;t have an account?<Link to={"/signup"}>Signup</Link>
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
