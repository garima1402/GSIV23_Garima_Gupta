import { combineReducers } from "redux";
import { getMovieDataReducer, getSearchDataReducer } from "./reducer";

const rootReducer = combineReducers({
  movieData: getMovieDataReducer,
  searchData: getSearchDataReducer,
});

export default rootReducer;
