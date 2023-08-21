import { combineReducers } from "redux";
import { getMovieDataReducer } from "./reducer";

const rootReducer = combineReducers({
  movieData: getMovieDataReducer,
});

export default rootReducer;
