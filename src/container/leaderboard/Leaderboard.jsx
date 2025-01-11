import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import styles from "./leaderboard.module.css";
import { useEffect, useState } from "react";
import { fetchUsersGivenTestsRequest } from "../../store/usersGivenTests/userGivenTestsAction";
import { assets } from "../../assets/assets";

const Leaderboard = () => {
  const userGivenTests = useSelector(
    (state) => state.userGivenTests.usersGivenTests
  );
  const dispatch = useDispatch();

  const [sortedUsers, setSortedUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserIndex, setCurrentUserIndex] = useState(null);
  const [currentUserMarks, setCurrentUserMarks] = useState(null);

  useEffect(() => {
    dispatch(fetchUsersGivenTestsRequest());
  }, [dispatch]);

  useEffect(() => {
    // Sort the data whenever `userGivenTests` updates
    const sortedData = [...userGivenTests].sort((a, b) => b.marks - a.marks);
    setSortedUsers(sortedData);
  }, [userGivenTests]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];
    setCurrentUser(currentUser[0]);
  }, []);

  useEffect(() => {
    if (currentUser && sortedUsers.length > 0) {
      const index =
        sortedUsers.findIndex(
          (user) => user.fullName === currentUser.fullName
        ) + 1;
      const user = sortedUsers.find((user) => user.email === currentUser.email);
      setCurrentUserIndex(index);
      setCurrentUserMarks(user.marks);
    }
  }, [currentUser, sortedUsers]);

  console.log(sortedUsers);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div>
          <h1 className={styles.rank_display} id="display-rank">
            Wow you rank 1st
          </h1>
          <h2 className={styles.supporting_text} id="supporting-text">
            Congratulation
          </h2>
        </div>
        <div className={styles.podium}>
          {sortedUsers.slice(1, 2).map((user, index) => (
            <div className={`${styles.rank} ${styles.second}`} key={index}>
              <div className={`${styles.crown} ${styles.white}`}>
                <img src={assets.crownWhite} alt="" />
              </div>
              <p className={styles.rank_value}>#{2 + index}</p>
              <div>
                <img
                  className={`${styles.users_photo}  ${styles.second_rank}`}
                  src={`https://ui-avatars.com/api/?name=${user.fullName}`}
                  alt=""
                  id="second-rank-proile-img"
                />
              </div>
              <div
                className={`${styles.score_container} ${styles.score_container__second}`}
              >
                <h2 className={styles.rank_name} id="second-rank-name">
                  {user.fullName}
                </h2>
                <h2 className={styles.score_heading}>Score</h2>
                <h3 className={styles.marks_heading} id="second-rank-score">
                  {user.marks}
                </h3>
              </div>
            </div>
          ))}
          {sortedUsers.slice(0, 1).map((user, index) => (
            <div className={`${styles.rank} ${styles.first}`} key={index}>
              <div className={`${styles.crown}`}>
                <img src={assets.crown} alt="" />
              </div>
              <div>
                <img
                  className={`${styles.users_photo}  ${styles.first_rank}`}
                  src={`https://ui-avatars.com/api/?name=${user.fullName}`}
                  alt=""
                  id="first-rank-proile-img"
                />
              </div>
              <div
                className={`${styles.score_container} ${styles.score_container__first}`}
              >
                <h2 className={styles.rank_name} id="first-rank-name">
                  {user.fullName}
                </h2>
                <h2 className={styles.score_heading}>Score</h2>
                <h3 className={styles.marks_heading} id="first-rank-score">
                  {user.marks}
                </h3>
              </div>
            </div>
          ))}
          {sortedUsers.slice(2, 3).map((user, index) => (
            <div className={`${styles.rank} ${styles.third}`} key={index}>
              <div className={`${styles.crown} ${styles.white}`}>
                <img src={assets.crownWhite} alt="" />
              </div>
              <p className={styles.rank_value}>#3</p>
              <div>
                <img
                  className={`${styles.users_photo}  ${styles.third_rank}`}
                  src={`https://ui-avatars.com/api/?name=${user.fullName}`}
                  alt=""
                  id="third-rank-proile-img"
                />
              </div>
              <div
                className={`${styles.score_container} ${styles.score_container__third}`}
              >
                <h2 className={styles.rank_name} id="third-rank-name">
                  {user.fullName}
                </h2>
                <h2 className={styles.score_heading}>Score</h2>
                <h3 className={styles.marks_heading} id="third-rank-score">
                  {user.marks}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.curve_container}>
          <div className={styles.other_ranks} id="other-ranks-section">
            {currentUser && currentUserIndex && (
              <div
                className={`${styles.rank_item} ${styles.currrnt_user_div}`}
                id="current-user-score"
              >
                <div className={styles.rank_item__name}>
                  <h3 className={styles.rank_item__rank} id="current-user-rank">
                    #{currentUserIndex}
                  </h3>
                  <h3
                    className={styles.rank_item__username}
                    id="current-user-name"
                  >
                    {currentUser.fullName}
                  </h3>
                </div>
                <div className={styles.rank_item__score}>
                  <h3 id="current-user-marks">{currentUserMarks}</h3>
                </div>
              </div>
            )}
            <hr />

            {sortedUsers.slice(3, 6).map((user, index) => (
              <div className={styles.rank_item} key={index}>
                <div className={styles.rank_item__name}>
                  <h3 className={styles.rank_item__rank} id="fourth-rank">
                    #{4 + index}
                  </h3>
                  <h3
                    className={styles.rank_item__username}
                    id="fourth-rank-name"
                  >
                    {user.fullName}
                  </h3>
                </div>
                <div className={styles.rank_item__score}>
                  <h3 id="fourth-rank-score">{user.marks}</h3>
                </div>
              </div>
            ))}

            {sortedUsers.slice(6).map((user, index) => (
              <div className={styles.rank_item} key={index}>
                <div className={styles.rank_item__name}>
                  <h3 className={styles.rank_item__rank} id="fourth-rank">
                    #{7 + index}
                  </h3>
                  <h3
                    className={styles.rank_item__username}
                    id="fourth-rank-name"
                  >
                    {user.fullName}
                  </h3>
                </div>
                <div className={styles.rank_item__score}>
                  <h3 id="fourth-rank-score">{user.marks}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
