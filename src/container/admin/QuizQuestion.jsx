import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsRequest } from "../../store/questions/questionActions";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import ViewQuestionModal from "../../components/Modals/ViewQuestionModal";
import SideBar from "../../components/SideBar";

const QuizQuestion = () => {
  const [sidebar, setSideBar] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [viewQuestionModal, setViewQuestionModal] = useState(false);

  const questions = useSelector((state) => state.question.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestionsRequest());
  }, [dispatch]);

  if (!questions || questions.length === 0) {
    return <div className="loader"></div>;
  }

  const viewQuestion = (question) => {
    setSelectedQuestion(question);
    setViewQuestionModal(true);
  };
  return (
    <div>
      <AdminNavbar sidebar={sidebar} setSideBar={setSideBar} />
      <main className="main-container">
      {sidebar && (
          <SideBar/>
        )}
        <section className="quiz-questions-section">
          <h1 className="quiz-questions-section__header">MCQ Question Lists</h1>
          <div className="quiz-question-btn-wrapper">
            <button type="button" className="add-question-btn">
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
                      <button onClick={() => viewQuestion(question)}>
                        <FaEye />
                      </button>
                      <button>
                        <FaPencil />
                      </button>
                      <button>
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
      {viewQuestionModal && (
        <ViewQuestionModal selectedQuestion={selectedQuestion} setViewQuestionModal={setViewQuestionModal} />
      )}
    </div>
  );
};

export default QuizQuestion;
