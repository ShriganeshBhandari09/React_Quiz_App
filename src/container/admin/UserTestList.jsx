import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import SideBar from "../../components/SideBar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersGivenTestsRequest } from "../../store/usersGivenTests/userGivenTestsAction";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const UserTestList = () => {
  const [sidebar, setSideBar] = useState(true);

  const { index, fullName } = useParams();

  const userGivenTests = useSelector(
    (state) => state.userGivenTests.usersGivenTests
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersGivenTestsRequest());
  }, [dispatch]);

  const userIndex = userGivenTests.findIndex(
    (user) => user.fullName === fullName
  );

  const userTestAnswers =
    userGivenTests[userIndex]?.tests[index].selectedAnswers;

  return (
    <div>
      <AdminNavbar sidebar={sidebar} setSideBar={setSideBar} />
      <main className="main-container">
        {sidebar && <SideBar />}
        <section className="users-section">
          <h1 className="users-section__header" id="user-name">
            {fullName} | {userGivenTests[userIndex]?.email}
          </h1>
          <div className="users-test-section">
            <div className="users-test-data">
              <span id="test-number">{`Test No. ${Number(index) + 1}`}</span>
              <span id="test-score">{`Score: ${userGivenTests[userIndex]?.tests[index].marks}`}</span>
              <span id="test-date">{`Test Date: ${userGivenTests[userIndex].tests[index].date}`}</span>
            </div>
            <div className="user-test" id="user-test-data">
              {userTestAnswers?.map((userTestAnswer, index) => (
                <div key={index} className="user-test-question">
                  <p>
                    <strong>Question {index + 1}: </strong>
                    {userTestAnswer.question}
                  </p>
                  <div className="options-container">
                    {userTestAnswer.options.map((option, optionIndex) => {
                      const isCorrect = option === userTestAnswer.correctAnswer;
                      const isSelected =
                        option === userTestAnswer.selectedAnswer;
                      return (
                        <div
                          className={`option ${
                            isCorrect
                              ? "question-container-right-answers"
                              : isSelected
                              ? "question-container-wrong-answers"
                              : ""
                          }`}
                          key={optionIndex}
                        >
                          <p>
                            {optionIndex + 1}. {option}
                            <span>
                              {isCorrect ? (
                                <FaCheckCircle style={{ color: "#CB6040" }} />
                              ) : isSelected ? (
                                <FaCircleXmark style={{ color: "#31511E" }} />
                              ) : (
                                ""
                              )}
                            </span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserTestList;
