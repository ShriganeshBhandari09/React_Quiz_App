import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import styles from "./quizpage.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
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
  const [displayQuestion, setDisplayQuestion] = useState(0);
  const [rangeSlider, setRangeSlider] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionsArray, setSelectedOptionsArray] = useState([]);
  const [quizPage, setQuizPage] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [marks, setMarks] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswersArray, setSelectedAnswersArray] = useState([]);
  const [tests, setTests] = useState([]);
  const [noOfTimeTestGiven, setNoOfTimeTestGiven] = useState(1);

  useEffect(() => {
    dispatch(fetchQuestionsRequest());
  }, [dispatch]);

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

  if (!questions || questions.length === 0) {
    return <div className="loader"></div>;
  }

  // const nextQuestion = () => {
  //   // if (!selectedOption) {
  //   //   alert("Please Select the answer.");
  //   //   return;
  //   // }
  //   if (displayQuestion < totalQuestions - 1) {
  //     setDisplayQuestion(displayQuestion + 1);
  //     setRangeSlider(rangeSlider + 1);
  //   } else {
  //     let text = "Are you sure to sumbit the Quiz?";
  //     if (confirm(text)) {
  //       navigate("/leaderboard");
  //     }
  //   }
  // };
  const previousQuestion = () => {
    if (displayQuestion > 0) {
      setDisplayQuestion(displayQuestion - 1);
      setRangeSlider(rangeSlider - 1);

      const previousSelectedOption = selectedOptionsArray[displayQuestion - 1];
      setSelectedOption(previousSelectedOption || "");

      console.log("Moved to Previous Question:", displayQuestion - 1);
      console.log("Previously Selected Option:", previousSelectedOption);
    } else {
      console.log("No previous question available.");
    }
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      alert("Please Select an Answer");
      return;
    }

    const updatedOptionsArray = [...selectedOptionsArray];
    updatedOptionsArray[displayQuestion] = selectedOption;

    setSelectedOptionsArray(updatedOptionsArray);
    setSelectedOption("");

    if (displayQuestion === totalQuestions - 1) {
      console.log("Final Selected Options Array:", updatedOptionsArray);
      if (confirm("Are you sure you want to submit the Quiz?")) {
        setQuizPage(false);
        setShowResults(true);
        calculateMarks();
      }
    } else {
      setDisplayQuestion(displayQuestion + 1);
      setRangeSlider(rangeSlider + 1);
    }
    console.log("Updated Options Array:", updatedOptionsArray);
  };

  const calculateMarks = () => {
    let tempMarks = 0;
    let tempCorrectAnswers = 0;
    let tempSelectedAnswersArray = [];

    // Loop through selected options
    selectedOptionsArray.forEach((selectedOption, index) => {
      const correctAnswer = questions[randomNumberArray[index]].answer;
      const isCorrect = selectedOption === correctAnswer;

      // Calculate marks and track correct answers
      if (isCorrect) {
        tempMarks += 10;
        tempCorrectAnswers++;
      }

      // Push details of the current question into the array
      tempSelectedAnswersArray.push({
        question: questions[randomNumberArray[index]].question,
        selectedAnswer: selectedOption,
        correctAnswer: correctAnswer,
        options: questions[randomNumberArray[index]].options,
      });
      console.log(index);
    });

    // Update states
    setMarks(tempMarks);
    setCorrectAnswers(tempCorrectAnswers);
    setSelectedAnswersArray(tempSelectedAnswersArray);
  };

  return (
    <section>
      <Navbar />
      <main className={styles.container}>
        {quizPage && (
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
                {questions[randomNumberArray[displayQuestion]]?.options.map(
                  (option, index) => (
                    <div key={index} className={styles.input__container}>
                      <input
                        type="radio"
                        id={`option-${index}`}
                        value={option}
                        checked={selectedOption === option}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        name={`question-${displayQuestion}`}
                      />
                      <label htmlFor={`option-${index}`} id={`label-${index}`}>
                        <span>{index + 1}. </span>
                        {option}
                      </label>
                    </div>
                  )
                )}
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
                onClick={handleSubmit}
                id="forward-btn"
                className={styles.secondary_btn}
                type="button"
              >
                {displayQuestion === totalQuestions - 1 ? "Submit" : "Next"}
                <HiArrowSmRight />
              </button>
            </div>
          </section>
        )}
        {showResults && (
          <section className="container__score-section" id="score-container">
            <div className={styles.display_question_answers_container}>
              <h2 style={{ textAlign: "center" }}>{`${
                loggedInUser[0].fullName
              } scored ${marks} out of ${totalQuestions * 10}`}</h2>
              <Link to="/leaderboard">
                <h2
                  className="score-link-redirect"
                  style={{ textAlign: "center" }}
                >
                  View you Rank on Leaderboard
                </h2>
              </Link>
              {selectedAnswersArray.map((answer, index) => (
                <div
                  key={index}
                  className={`${styles.question_answer_container} ${
                    answer.selectedAnswer === answer.correctAnswer
                      ? `${styles.question_container_right_answers}`
                      : `${styles.question_container_wrong_answers}`
                  }`}
                >
                  <h2 className="container__question">
                    {index + 1}. {answer.question}
                  </h2>
                  <p className="container__selected-option">
                    Selected Answer: {answer.selectedAnswer}
                  </p>
                  <p className="container__correct-answer">
                    Correct Answer: {answer.correctAnswer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </section>
  );
};

export default QuizPage;
