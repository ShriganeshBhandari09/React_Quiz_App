import { Link } from "react-router";
import styles from "./dashboard.module.css";
import Navbar from "../../components/Navbar";
const Dashboard = () => {
  return (
    <section>
      <Navbar />
      <main className={styles.main_container}>
        <section className={styles.dashboard_section}>
          <h1 className={styles.dashboard_section__heading}>
            Let&apos;s Start the Quiz
          </h1>
          <span className={styles.dashboard_section__time}>
            <img src="src/assets/time.svg" alt="" />
            10 min
          </span>
          <ul className={styles.class__description}>
            <li>Disclaimers</li>
            <li>Disclaimers</li>
          </ul>
        </section>
        <section className={styles.content}>
          <div className={styles.content__img_wrapper}>
            <img
              className={styles.content__img}
              src="src/assets/dashboard.svg"
              alt=""
            />
          </div>
          <h2 className={styles.content__title}>
            Think you know programming? Prove it!
          </h2>
          <p className={styles.content__description}>
            When you&apos;re done, review your answers and See your rank.
          </p>

          <div className={styles.content__form_btnwrapper}>
            <Link to={"/quiz-page"}>
              <button
                className={`${styles.primary_btn} ${styles.content__form_btn}`}
                type="submit"
              >
                Start the Quiz
              </button>
            </Link>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
