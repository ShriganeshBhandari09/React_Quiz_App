import { all, fork, put, call, takeLatest } from "redux-saga/effects";

import axios from "axios";
import { USERTEST_API_ENDPOINTS } from "./UsersGivenTestsConstants";
import { API_URL } from "../../config";

// Centralized API URL for consistency
const apiUrl = "http://localhost:5000/userTests";

function* fetchUserGivenTests() {
  try {
    const response = yield call(
      axios.get,
      `${USERTEST_API_ENDPOINTS.userTestAPI}`
    );
    yield put({
      type: "FETCH_USER_GIVEN_TEST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: "FETCH_USER_GIVEN_TEST_ERROR", payload: error.message });
  }
}

function* addUserTest(action) {
  try {
    const response = yield call(
      axios.post,
      `${USERTEST_API_ENDPOINTS.userTestAPI}`,
      action.payload
    );
    yield put({ type: "ADD_USER_TEST_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "ADD_USER_TEST_ERROR", payload: error.message });
  }
}

// Update a user test
function* updateUserTest(action) {
  try {
    const response = yield call(
      axios.put,
      `${USERTEST_API_ENDPOINTS.userTestAPI}/${action.payload.id}`,
      action.payload
    );
    yield put({ type: "UPDATE_USER_TEST_SUCCESS", payload: response.data });
    console.log("Calling");
  } catch (error) {
    yield put({ type: "UPDATE_USER_TEST_ERROR", payload: error.message });
    console.log("ERROR");
  }
}

function* watchFetchUserGivenTests() {
  yield takeLatest("FETCH_USER_GIVEN_TEST_REQUEST", fetchUserGivenTests);
}

function* watchAddUserTest() {
  yield takeLatest("ADD_USER_TEST_REQUEST", addUserTest);
}

function* watchUpdateUserTest() {
  yield takeLatest("UPDATE_USER_TEST_REQUEST", updateUserTest);
}

export default function* userGivenTestsSaga() {
  yield all([
    fork(watchFetchUserGivenTests),
    fork(watchAddUserTest),
    fork(watchUpdateUserTest),
  ]);
}
