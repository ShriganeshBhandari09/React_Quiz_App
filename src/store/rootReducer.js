import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import questionReducer from "./questions/questionReducer";

const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer
});

export default rootReducer;

