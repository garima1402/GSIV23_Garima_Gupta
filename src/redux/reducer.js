import { ACTION_NAME } from "./actionName";

const initialState = {
  payload: {
    movieData: [],
  },
};
const { MOVIE_DATA } = ACTION_NAME;
export const getMovieDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_DATA:
      return {
        ...state,
        payload: {
          movieData: action.payload.movieData,
        },
      };
    default:
      return state;
  }
};
