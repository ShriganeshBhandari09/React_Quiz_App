const initialState = {
  questions: [],
  loading: false,
};

const questionReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case "FETCH_QUESTIONS_SUCCESS":
      return { ...state, loading: false, questions: action.payload };
    case "ADD_QUESTION_SUCCESS":
      return { ...state, questions: [...state.questions, action.payload] };
    case "UPDATE_QUESTION_SUCCESS":
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === action.payload.id ? action.payload : question
        ),
      };
    case "DELETE_QUESTION_SUCCESS":
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default questionReducer;
