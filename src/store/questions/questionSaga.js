import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

const apiUrl = "http://localhost:5000/questions";
function* fetchQuestions() {
  try {
    const response = yield call(axios.get, apiUrl);
    yield put({ type: "FETCH_QUESTIONS_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_QUESTIONS_ERROR", payload: error.message });
  }
}

function* addQuestions(action) {
  try {
    const response = yield call(axios.post, apiUrl, action.payload);
    yield put({ type: "ADD_QUESTION_SUCCESS", payload: response.data });
    console.log("ADD question running");
  } catch (error) {
    yield put({ type: "ADD_QUESTION_ERROR", payload: error.message });
    console.log("ADD question error");
  }
}

function* watchQuestions() {
  yield takeLatest("FETCH_QUESTIONS_REQUEST", fetchQuestions);
}

function* watchAddQuestions() {
  yield takeLatest("ADD_QUESTION_REQUEST", addQuestions);
}

export default function* questionSaga() {
  yield all([fork(watchQuestions), fork(watchAddQuestions)]);
}
