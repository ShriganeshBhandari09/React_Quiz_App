import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuestionRequest } from "../../store/questions/questionActions";

const UpdateQuestionModal = ({ selectedQuestion, setUpdateQuestionModal }) => {
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
    setUpdateQuestionModal(false);
  };

  return (
    <>
      <div
        className="opacity"
        onClick={() => setUpdateQuestionModal(false)}
      ></div>
      <div className="add-question-container">
        <span
          className="close-button"
          onClick={() => setUpdateQuestionModal(false)}
        >
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

export default UpdateQuestionModal;
