import styles from "../container/leaderboard/leaderboard.module.css";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const RankHeading = ({ currentUserIndex, suffix }) => {
  const { width, height } = useWindowSize();
  console.log(width)
  return (
    <>
      <h1 className={styles.rank_display} id="display-rank">
        Wow, Your Rank Is {currentUserIndex}
        {suffix}
      </h1>
      <h2 className={styles.supporting_text} id="supporting-text">
        🎉 Congratulations 🎉
      </h2>
      <Confetti width={width - 20} height={height} recycle={false} />
    </>
  );
};

RankHeading.propTypes;

export default RankHeading;
