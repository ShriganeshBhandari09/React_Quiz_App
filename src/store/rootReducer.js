import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import questionReducer from "./questions/questionReducer";
import userGivenTestReducer from "./usersGivenTests/userGivenTestsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
  userGivenTests: userGivenTestReducer
});

export default rootReducer;

