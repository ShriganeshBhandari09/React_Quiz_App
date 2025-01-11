const ViewQuestionModal = ({ selectedQuestion, setViewQuestionModal }) => {
  return (
    <>
      <div
        className="opacity"
        onClick={() => setViewQuestionModal(false)}
      ></div>
      <div className="view-question-container">
        <span
          className="close-button"
          onClick={() => setViewQuestionModal(false)}
        >
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

export default ViewQuestionModal;
