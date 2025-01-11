export const fetchQuestionsRequest = () => ({
  type: "FETCH_QUESTIONS_REQUEST",
});
export const fetchQuestionsSuccess = (questions) => ({
  type: "FETCH_QUESTIONS_SUCCESS",
  payload: questions,
});
export const fetchUsersError = (error) => ({
  type: "FETCH_QUESTIONS_ERROR",
  payload: error,
});

export const addQuestionRequest = (question) => ({
  type: "ADD_QUESTION_REQUEST",
  payload: question,
});

export const addQuestionSuccess = (question) => ({
  type: "ADD_QUESTION_SUCCESS",
  payload: question,
});

export const addQuestionError = (error) => ({
  type: "ADD_QUESTION_ERROR",
  payload: error,
});


export const updateQuestionRequest = (question) => ({
  type:"UPDATE_QUESTION_REQUEST",
  payload: question
})

export const updateQuestionSuccess = (question) => ({
  type:"UPDATE_QUESTION_SUCCESS",
  payload: question
})

export const updateQuestionError = (error) => ({
  type:"UPDATE_QUESTION_ERROR",
  payload: error
})

export const deleteQuestionRequest = (id) => ({
  type: "DELETE_QUESTION_REQUEST",
  payload: id,
});

export const deleteQuestionSuccess = (id) => ({
  type: "DELETE_QUESTION_SUCCESS",
  payload: id,
});

export const deleteQuestionError = (error) => ({
  type: "DELETE_QUESTION_ERROR",
  payload: error,
});
