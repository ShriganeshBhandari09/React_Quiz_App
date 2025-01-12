import { all, fork, put, call, takeLatest } from "redux-saga/effects";

import axios from "axios";
import { API_ENDPOINTS } from "./userConstant";

function* fetchUsers() {
  try {
    const response = yield call(axios.get, `${API_ENDPOINTS.fetchAPI}`);
    yield put({ type: "FETCH_USER_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_USER_ERROR", payload: error.message });
  }
}

function* addUser(action) {
  try {
    const response = yield call(axios.post, `${API_ENDPOINTS.fetchAPI}`, action.payload);
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
