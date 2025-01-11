import { useState } from "react";

const AddQuestionModal = ({ setAddQuestionModal }) => {
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  return (
    <>
      <div className="opacity" onClick={() => setAddQuestionModal(false)}></div>
      <div className="add-question-container">
        <span
          className="close-button"
          onClick={() => setAddQuestionModal(false)}
        >
          &times;
        </span>
        <div className="add-question-header-container">
          <h2 className="add-question-heading">Add Question</h2>
        </div>
        <form>
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
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            >
              <option value="">Choose an option</option>
              <option value={optionOne}>{optionOne}</option>
              <option value={optionTwo}>{optionTwo}</option>
              <option value={optionThree}>{optionThree}</option>
              <option value={optionFour}>{optionFour}</option>
            </select>
          </div>
          <button className="primary-btn" type="submit">Add Question</button>
        </form>
      </div>
    </>
  );
};

AddQuestionModal.propTypes;

export default AddQuestionModal;
