import exclamation from "../../assets/exclamation.png";

const DeleteQuestionModal = ({ selectedQuestion, setDeleteQuestionModal }) => {
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
            <button className="primary-btn">Delete</button>
            <button
              className="primary-btn"
              style={{ backgroundColor: "#ff2146" }}
              onClick={() => setDeleteQuestionModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteQuestionModal.propTypes

export default DeleteQuestionModal;
