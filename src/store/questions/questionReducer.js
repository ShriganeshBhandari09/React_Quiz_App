const initialState = {
  questions: [],
  loading: false,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUESTIONS_SUCCESS":
      return { ...state, loading: false, questions: action.payload };
    case "ADD_QUESTION_SUCCESS":
      return { ...state, questions: [...state.questions, action.payload] };
    default:
      return state;
  }
};

export default questionReducer;
