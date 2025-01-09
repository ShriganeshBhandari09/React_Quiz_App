import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import styles from "./quizpage.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { fetchQuestionsRequest } from "../../store/questions/questionActions";
const QuizPage = () => {
  const questions = useSelector((state) => state.question.questions);
  const navigate = useNavigate();

  const totalQuestions = 10;
  const maxSliderValue = 100;
  const initialSilderValue = maxSliderValue / totalQuestions;

  const dispatch = useDispatch();

  const [randomNumberArray, setRandomNumberArray] = useState([]);
  console.log(questions);

  const [displayQuestion, setDisplayQuestion] = useState(0);
  const [rangeSlider, setRangeSlider] = useState(0);
  // const [selectedOption, setSelectedOption] = useState(false);

  useEffect(() => {
    dispatch(fetchQuestionsRequest());
  }, [dispatch]);

  // console.log(questions.length)

  useEffect(() => {
    if (questions && questions.length > 0) {
      const generateRandomNumbers = () => {
        const length = 10;
        const min = 0;
        const max = questions.length - 1;
        const uniqueNumbers = new Set();

        while (uniqueNumbers.size < length) {
          const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
          uniqueNumbers.add(randomNum);
        }
        setRandomNumberArray(Array.from(uniqueNumbers));
      };

      generateRandomNumbers();
    }
  }, [questions]);

  console.log(randomNumberArray);

  if (!questions || questions.length === 0) {
    return <div className="loader"></div>; // Loader
  }
  // console.log(randomNumberArray);

  const nextQuestion = () => {
    // if (!selectedOption) {
    //   alert("Please Select the answer.");
    //   return;
    // }
    if (displayQuestion < totalQuestions - 1) {
      setDisplayQuestion(displayQuestion + 1);
      setRangeSlider(rangeSlider + 1);
    } else {
      let text = "Are you sure to sumbit the Quiz?";
      if (confirm(text)) {
        navigate("/leaderboard");
      }
    }
  };

  const previousQuestion = () => {
    setDisplayQuestion(displayQuestion - 1);
    setRangeSlider(rangeSlider - 1);
  };

  return (
    <section>
      <Navbar />
      <main className={styles.container}>
        <section
          className={styles.container__quiz_question_section}
          id="main-container"
        >
          <div className={styles.container__heading_wrapper}>
            {displayQuestion === totalQuestions - 1 ? (
              <h1 className={styles.container__heading} id="question-heading">
                Hey! this is the Last Question
              </h1>
            ) : (
              <h1 className={styles.container__heading} id="question-heading">
                Question {displayQuestion + 1} of {totalQuestions}
              </h1>
            )}
          </div>
          <div className={styles.rangeslider} id="rangeSlider">
            <div
              className={styles.rangeSliderValue}
              style={{
                width: `${
                  initialSilderValue * rangeSlider +
                  maxSliderValue / totalQuestions
                }%`,
              }}
              id="rangeSliderValue"
            ></div>
          </div>
          <div className={styles.container__questions}>
            <div className={styles.container__quesion_wrapper}>
              <h2 className={styles.container__question} id="question">
                <span>{displayQuestion + 1}. </span>
                {questions[randomNumberArray[displayQuestion]]?.question}
              </h2>
              <p
                className={styles.question__description}
                id="question-description"
              ></p>
            </div>
            <div className={styles.container__answers}>
              <input
                type="radio"
                id="option-one"
                value={`${
                  questions[randomNumberArray[displayQuestion]]?.options[0]
                }`}
                name="options"
              />
              <label htmlFor="option-one" id="label-one">
                <span>1. </span>
                {questions[randomNumberArray[displayQuestion]]?.options[0]}
              </label>
              <input
                type="radio"
                id="option-two"
                value={`${
                  questions[randomNumberArray[displayQuestion]]?.options[1]
                }`}
                name="options"
              />
              <label htmlFor="option-two" id="label-two">
                <span>2. </span>
                {questions[randomNumberArray[displayQuestion]]?.options[1]}
              </label>
              <input
                type="radio"
                id="option-three"
                value={`${
                  questions[randomNumberArray[displayQuestion]]?.options[2]
                }`}
                name="options"
              />
              <label htmlFor="option-three" id="label-three">
                <span>3. </span>
                {questions[randomNumberArray[displayQuestion]]?.options[2]}
              </label>
              <input
                type="radio"
                id="option-four"
                value={`${
                  questions[randomNumberArray[displayQuestion]]?.options[3]
                }`}
                name="options"
              />
              <label htmlFor="option-four" id="label-four">
                <span>4. </span>
                {questions[randomNumberArray[displayQuestion]]?.options[3]}
              </label>
            </div>
          </div>
          <div className={styles.container__buttons}>
            <button
              onClick={previousQuestion}
              id="previous-btn"
              className={`${styles.secondary_btn} ${styles.previous_btn} ${
                displayQuestion < 1 && styles.hidden
              }`}
              type="button"
            >
              <HiArrowSmLeft />
              Previous
            </button>
            <button
              onClick={nextQuestion}
              id="forward-btn"
              className={styles.secondary_btn}
              type="button"
            >
              {displayQuestion === totalQuestions - 1 ? "Submit" : "Next"}{" "}
              <HiArrowSmRight />
            </button>
          </div>
        </section>
        {/* <section className="container__score-section" id="score-container">
          <div
            className="display-question-answers-continer"
            id="display-question-answers-continer"
          >
            <h2 id="marks"></h2>
            <a href="../pages/leaderboard.html">
              <h2 className="score-link-redirect">
                View you Rank on Leaderboard
              </h2>
            </a>
          </div>
        </section> */}
      </main>
    </section>
  );
};

export default QuizPage;
