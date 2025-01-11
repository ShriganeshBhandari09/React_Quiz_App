import { all, fork, put, call, takeLatest } from "redux-saga/effects";

import axios from "axios";

// Centralized API URL for consistency
const apiUrl = "https://quiz-app-json-server.onrender.com/users";

function* fetchUsers() {
  try {
    const response = yield call(axios.get, apiUrl);
    yield put({ type: "FETCH_USER_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_USER_ERROR", payload: error.message });
  }
}

function* addUser(action) {
  try {
    const response = yield call(axios.post, apiUrl, action.payload);
    yield put({ type: "ADD_USER_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "ADD_USER_ERROR", payload: error.message });
  }
}

function* watchFetchUser() {
  yield takeLatest("FETCH_USER_REQUEST", fetchUsers);
}

function* watchAddUser() {
  yield takeLatest("ADD_USER_REQUEST", addUser);
}

export default function* userSaga() {
  yield all([fork(watchFetchUser), fork(watchAddUser)]);
}
