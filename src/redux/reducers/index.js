import { combineReducers } from "redux";
// import searchReducer from "./searchReducer";
// import mostPopularMoviesReducer from "./mostPopularMoviesReducer";
import tasksReducer from "./tasksReducer";
const rootReducer = combineReducers({
  //   demoReducer,
  tasksReducer,
});

export default rootReducer;
