import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { QUESTION_API_ENDPOINTS } from "./questionConstants";
import { API_URL } from "../../config";

function* fetchQuestions() {
  try {
    const response = yield call(
      axios.get,
      `${QUESTION_API_ENDPOINTS.questionAPI}`
    );
    yield put({ type: "FETCH_QUESTIONS_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_QUESTIONS_ERROR", payload: error.message });
  }
}

function* addQuestions(action) {
  try {
    const response = yield call(
      axios.post,
      `${QUESTION_API_ENDPOINTS.questionAPI}`,
      action.payload
    );
    yield put({ type: "ADD_QUESTION_SUCCESS", payload: response.data });
    console.log("ADD question running");
  } catch (error) {
    yield put({ type: "ADD_QUESTION_ERROR", payload: error.message });
    console.log("ADD question error");
  }
}

function* updateQuestion(action) {
  try {
    const response = yield call(
      axios.put,
      `${QUESTION_API_ENDPOINTS.questionAPI}/${action.payload.id}`,
      action.payload
    );
    yield put({ type: "UPDATE_QUESTION_SUCCESS", payload: response.data });
    console.log("Update question running");
  } catch (error) {
    yield put({ type: "UPDATE_QUESTION_ERROR", payload: error.message });
    console.log("Update question Error");
  }
}

function* deleteQuestion(action) {
  try {
    yield call(
      axios.delete,
      `${QUESTION_API_ENDPOINTS.questionAPI}/${action.payload}`,
      action.payload
    );
    yield put({ type: "DELETE_QUESTION_SUCCESS", payload: action.payload });
    console.log("Delete question running");
  } catch (error) {
    yield put({ type: "DELETE_QUESTION_ERROR", payload: error.message });
    console.log("Delete question error");
  }
}

function* watchQuestions() {
  yield takeLatest("FETCH_QUESTIONS_REQUEST", fetchQuestions);
}

function* watchAddQuestions() {
  yield takeLatest("ADD_QUESTION_REQUEST", addQuestions);
}

function* watchUpdateQuestion() {
  yield takeLatest("UPDATE_QUESTION_REQUEST", updateQuestion);
}

function* watchDeleteQuestion() {
  yield takeLatest("DELETE_QUESTION_REQUEST", deleteQuestion);
}

export default function* questionSaga() {
  yield all([
    fork(watchQuestions),
    fork(watchAddQuestions),
    fork(watchDeleteQuestion),
    fork(watchUpdateQuestion),
  ]);
}
