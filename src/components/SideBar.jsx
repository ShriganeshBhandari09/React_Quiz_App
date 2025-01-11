import { Link } from "react-router-dom";
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
        <Link to="/admin-dashboard" className="sidebar-menu-links">
          <img src={homePng} alt="" />
          Home
        </Link>
        <Link to="/quiz-questions" className="sidebar-menu-links">
          <img src={quizPng} alt="" />
          Quizzes
        </Link>
        <Link to="/users" className="sidebar-menu-links">
          <img src={teamworkPng} alt="" />
          Users
        </Link>
      </div>
    </section>
  );
};

export default SideBar;
