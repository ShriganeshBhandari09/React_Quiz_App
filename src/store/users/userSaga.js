import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import http from "../../libraries/axios";
import { ApiConstants } from "../../constants/ApiConstants";

function* fetchUsers() {
  try {
    const response = yield call(http.get, `${ApiConstants.usersAPI}`);
    yield put({ type: "FETCH_USER_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_USER_ERROR", payload: error.message });
  }
}

function* addUser(action) {
  try {
    const response = yield call(
      http.post,
      `${ApiConstants.usersAPI}`,
      action.payload
    );
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
