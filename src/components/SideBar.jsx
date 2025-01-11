import { NavLink } from "react-router-dom";
import homePng from "../assets/home.png";
import quizPng from "../assets/question.png";
import teamworkPng from "../assets/teamwork.png";

const SideBar = () => {
  return (
    <section className="sidebar" id="side-bar">
      <div>
        <h2>Menu</h2>
      </div>
      <div className="sidebar-menu">
        <NavLink to="/admin-dashboard" className="sidebar-menu-links">
          <img src={homePng} alt="" />
          Home
        </NavLink>
        <NavLink to="/quiz-questions" className="sidebar-menu-links">
          <img src={quizPng} alt="" />
          Quizzes
        </NavLink>
        <NavLink to="/users" className="sidebar-menu-links">
          <img src={teamworkPng} alt="" />
          Users
        </NavLink>
      </div>
    </section>
  );
};

export default SideBar;
