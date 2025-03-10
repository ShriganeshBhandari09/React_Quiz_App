import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../login.module.css";
import { addUserRequest } from "../../../store/users/userActions";
import { assets } from "../../../assets/assets";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Signup = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxSelected, setcheckboxSelected] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!fullName) {
      errors.fullName = "Please Enter FullName.";
    }
    if (!password) {
      errors.password = "Please enter password";
    }
    if (!email) {
      errors.email = "Please enter email";
    }
    if (!checkboxSelected) {
      alert("Please Select checkbox");
      return;
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = users.find((user) => user.email === email);
    if (newUser) {
      alert("Email is already registered");
      navigate("/signup");
      return;
    }

    if (validate()) {
      dispatch(addUserRequest({ fullName, email, password }));
      alert("Signup Successfull");
      navigate("/");
    }
  };

  return (
    <section className={`${styles.auth} ${styles.container}`}>
      <div className={`${styles.auth__img_wrapper}`}>
        <img className={styles.auth__img} src={assets.signup} alt="" />
      </div>
      <div className={styles.auth__form_container}>
        <div className={styles.auth__form_header}>
          <h1 className={styles.auth__form_heading}>Sign Up</h1>
          <span className={styles.auth__form_description}>Sign Up To Join</span>
        </div>
        <form className={styles.auth__form} onSubmit={handleSubmit}>
          <div className={styles.auth__form_div}>
            <label className={styles.auth__form_label}>Full Name*</label>
            <input
              className={styles.auth__form_input}
              type="text"
              name="name"
              id="fullname"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <span style={{ color: "red" }}>{errors.fullName}</span>
            )}
          </div>
          <div className={styles.auth__form_div}>
            <label className={styles.auth__form_label}>Email Id*</label>
            <input
              className={styles.auth__form_input}
              type="email"
              name="email"
              id="registeremail"
              placeholder="Email"
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
                required
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
          <div className={styles.auth__form_checkbox}>
            <input
              type="checkbox"
              name="terms-and-conditions"
              id="terms-and-conditions"
              onChange={() => setcheckboxSelected(true)}
            />
            <label>
              I accept <span> </span>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </label>
          </div>
          <button
            className={`${styles.primary_btn} ${styles.login_btn}`}
            type="submit"
          >
            Sign up
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
          Have an account?<Link to={"/"}>Login</Link>
        </span>
      </div>
    </section>
  );
};

export default Signup;
