import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsRequest } from "../../store/questions/questionActions";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import SideBar from "../../components/SideBar";
import Modal from "../../components/common/Modal";

const QuizQuestion = () => {
  const [sidebar, setSideBar] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [modalType, setModalType] = useState(null);

  const questions = useSelector((state) => state.question.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestionsRequest());
  }, [dispatch]);

  if (!questions || questions.length === 0) {
    return <div className="loader"></div>;
  }

  const addQuestionModal = (type) => {
    setModalType(type);
  };

  const viewQuestion = (question, type) => {
    setSelectedQuestion(question);
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const updateQuestion = (question, type) => {
    setSelectedQuestion(question);
    setModalType(type);
  };

  const deleteQuestion = (question, type) => {
    setSelectedQuestion(question);
    setModalType(type);
  };

  return (
    <div>
      <AdminNavbar sidebar={sidebar} setSideBar={setSideBar} />
      <main className="main-container">
        {sidebar && <SideBar />}
        <section className="quiz-questions-section">
          <h1 className="quiz-questions-section__header">MCQ Question Lists</h1>
          <div className="quiz-question-btn-wrapper">
            <button
              type="button"
              className="add-question-btn"
              onClick={() => addQuestionModal("add-question-modal")}
            >
              Add New Question
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th className="table-header">Sr. No.</th>
                <th className="table-header">Question</th>
                <th className="table-header">Action</th>
              </tr>
            </thead>
            <tbody className="table-data" id="question-table-data">
              {questions.map((question, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{question.question}</td>
                  <td className="table-button">
                    <div className="table-button-div">
                      <button
                        onClick={() =>
                          viewQuestion(question, "view-question-modal")
                        }
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() =>
                          updateQuestion(question, "update-question-modal")
                        }
                      >
                        <FaPencil />
                      </button>
                      <button
                        onClick={() =>
                          deleteQuestion(question, "delete-question-modal")
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      {modalType && (
        <Modal
          modalType={modalType}
          closeModal={closeModal}
          selectedQuestion={selectedQuestion}
        />
      )}
    </div>
  );
};

export default QuizQuestion;
