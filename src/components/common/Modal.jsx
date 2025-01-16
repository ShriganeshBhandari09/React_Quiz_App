import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addQuestionRequest,
  updateQuestionRequest,
  deleteQuestionRequest,
} from "../../store/questions/questionActions";
import exclamation from "../../assets/exclamation.png";
import { toast } from "react-toastify";

const ViewQuestionModal = ({ selectedQuestion, closeModal }) => {
  return (
    <>
      <div className="opacity" onClick={closeModal}></div>
      <div className="view-question-container">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <div className="view-question-header-container">
          <h2 className="view-question-heading">Question</h2>
        </div>

        <div className="question-div">
          <h1 className="question" id="view-question">
            {selectedQuestion.question}
          </h1>
          <ol className="view-question-options">
            <li id="view-option-one">{selectedQuestion.options[0]}</li>
            <li id="view-option-two">{selectedQuestion.options[1]}</li>
            <li id="view-option-three">{selectedQuestion.options[2]}</li>
            <li id="view-option-four">{selectedQuestion.options[3]}</li>
          </ol>

          <h2 id="view-correct-answer">
            Correct answer: {selectedQuestion.answer}
          </h2>
        </div>
      </div>
    </>
  );
};
ViewQuestionModal.propTypes;

const AddQuestionModal = ({ closeModal }) => {
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [answer, setAnswer] = useState("");

  const dispatch = useDispatch();

  const options = [optionOne, optionTwo, optionThree, optionFour];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addQuestionRequest({ question, options, answer }));
    closeModal();
    toast.success("Added Question Sucessfully");
  };

  return (
    <>
      <div className="opacity" onClick={closeModal}></div>
      <div className="add-question-container">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <div className="add-question-header-container">
          <h2 className="add-question-heading">Add Question</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="add-question-div">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              name="question"
              placeholder="Question"
              id="question-name"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 1</label>
            <input
              type="text"
              name="option-one"
              placeholder="Option One"
              id="option-one"
              value={optionOne}
              onChange={(e) => setOptionOne(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 2</label>
            <input
              type="text"
              name="option-two"
              placeholder="Option Two"
              id="option-two"
              value={optionTwo}
              onChange={(e) => setOptionTwo(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 3</label>
            <input
              type="text"
              name="option-three"
              placeholder="Option Three"
              id="option-three"
              value={optionThree}
              onChange={(e) => setOptionThree(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 4</label>
            <input
              type="text"
              name="option-four"
              placeholder="Option Four"
              id="option-four"
              value={optionFour}
              onChange={(e) => setOptionFour(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="options">Correct Answer</label>
            <select
              name="options"
              id="options"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            >
              <option value="">Choose an option</option>
              <option value={optionOne}>{optionOne}</option>
              <option value={optionTwo}>{optionTwo}</option>
              <option value={optionThree}>{optionThree}</option>
              <option value={optionFour}>{optionFour}</option>
            </select>
          </div>
          <button className="primary-btn" type="submit">
            Add Question
          </button>
        </form>
      </div>
    </>
  );
};

AddQuestionModal.propTypes;

const UpdateQuestionModal = ({ selectedQuestion, closeModal }) => {
  const [question, setQuestion] = useState(selectedQuestion.question);
  const [optionOne, setOptionOne] = useState(selectedQuestion.options[0]);
  const [optionTwo, setOptionTwo] = useState(selectedQuestion.options[1]);
  const [optionThree, setOptionThree] = useState(selectedQuestion.options[2]);
  const [optionFour, setOptionFour] = useState(selectedQuestion.options[3]);
  const [answer, setAnswer] = useState(selectedQuestion.answer);

  const dispatch = useDispatch();

  const options = [optionOne, optionTwo, optionThree, optionFour];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateQuestionRequest({
        id: selectedQuestion.id,
        question,
        options,
        answer,
      })
    );
    closeModal();
    toast.success("Updated Question Sucessfully");
  };

  return (
    <>
      <div className="opacity" onClick={closeModal}></div>
      <div className="add-question-container">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <div className="add-question-header-container">
          <h2 className="add-question-heading">Update Question</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="add-question-div">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              name="question"
              placeholder="Question"
              id="question-name"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 1</label>
            <input
              type="text"
              name="option-one"
              placeholder="Option One"
              id="option-one"
              value={optionOne}
              onChange={(e) => setOptionOne(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 2</label>
            <input
              type="text"
              name="option-two"
              placeholder="Option Two"
              id="option-two"
              value={optionTwo}
              onChange={(e) => setOptionTwo(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 3</label>
            <input
              type="text"
              name="option-three"
              placeholder="Option Three"
              id="option-three"
              value={optionThree}
              onChange={(e) => setOptionThree(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 4</label>
            <input
              type="text"
              name="option-four"
              placeholder="Option Four"
              id="option-four"
              value={optionFour}
              onChange={(e) => setOptionFour(e.target.value)}
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="options">Correct Answer</label>
            <select
              name="options"
              id="options"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            >
              <option value="">Choose an option</option>
              <option value={optionOne}>{optionOne}</option>
              <option value={optionTwo}>{optionTwo}</option>
              <option value={optionThree}>{optionThree}</option>
              <option value={optionFour}>{optionFour}</option>
            </select>
          </div>
          <button className="primary-btn" type="submit">
            Update Question
          </button>
        </form>
      </div>
    </>
  );
};

UpdateQuestionModal.propTypes;

const DeleteQuestionModal = ({ selectedQuestion, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteQuestionRequest(id));
    closeModal();
    toast.success("Deleted Question Sucessfully");
  };

  console.log(selectedQuestion.id);
  return (
    <>
      <div className="opacity"></div>
      <div className="delete-modal-container">
        <div className="delete-modal-img-container">
          <img
            src={exclamation}
            style={{ width: "100px", height: "100px" }}
            alt=""
          />
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2>Are you Sure?</h2>
          <p>You wont be able to revert this!</p>
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <button
              className="primary-btn"
              onClick={() => handleDelete(selectedQuestion.id)}
            >
              Delete
            </button>
            <button
              className="primary-btn"
              style={{ backgroundColor: "#ff2146" }}
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteQuestionModal.propTypes;

const Modal = ({ modalType, closeModal, selectedQuestion }) => {
  return (
    <div className="modal-container">
      {modalType === "view-question-modal" && (
        <ViewQuestionModal
          closeModal={closeModal}
          selectedQuestion={selectedQuestion}
        />
      )}
      {modalType === "add-question-modal" && (
        <AddQuestionModal closeModal={closeModal} />
      )}
      {modalType === "update-question-modal" && (
        <UpdateQuestionModal
          closeModal={closeModal}
          selectedQuestion={selectedQuestion}
        />
      )}
      {modalType === "delete-question-modal" && (
        <DeleteQuestionModal
          closeModal={closeModal}
          selectedQuestion={selectedQuestion}
        />
      )}
    </div>
  );
};

Modal.propTypes;

export default Modal;
