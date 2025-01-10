import { all } from "redux-saga/effects";
import userSaga from "./users/userSaga";
import questionSaga from "./questions/questionSaga";
import userGivenTestsSaga from "./usersGivenTests/userGivenTestsSaga";

export default function* rootSaga() {
  yield all([userSaga(), questionSaga(), userGivenTestsSaga()]);
}
