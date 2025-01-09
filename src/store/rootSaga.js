import { all } from "redux-saga/effects";
import userSaga from "./users/userSaga";
import questionSaga from "./questions/questionSaga";

export default function* rootSaga() {
  yield all([userSaga(), questionSaga()]);
}
