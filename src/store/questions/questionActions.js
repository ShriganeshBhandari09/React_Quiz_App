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
