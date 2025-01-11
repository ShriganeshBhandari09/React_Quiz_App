const AddQuestionModal = ({ setAddQuestionModal }) => {
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
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 1</label>
            <input
              type="text"
              name="option-one"
              placeholder="Option One"
              id="option-one"
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 2</label>
            <input
              type="text"
              name="option-two"
              placeholder="Option Two"
              id="option-two"
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 3</label>
            <input
              type="text"
              name="option-three"
              placeholder="Option Three"
              id="option-three"
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="option-one">Option 4</label>
            <input
              type="text"
              name="option-four"
              placeholder="Option Four"
              id="option-four"
            />
          </div>
          <div className="add-question-div">
            <label htmlFor="correct-answer">Correct Answer</label>
            <input
              type="text"
              name="correct-answer"
              placeholder="Correct Answer"
              id="correct-answer"
            />
          </div>
          <button className="primary-btn">Add Question</button>
        </form>
      </div>
    </>
  );
};

AddQuestionModal.propTypes;

export default AddQuestionModal;
