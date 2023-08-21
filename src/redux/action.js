import axios from "axios";
import { ACTION_NAME } from "./actionName";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M2N2JkNGJlOGZiNzI3MWQ0Mjk2ZjVmYjIxZGI1OSIsInN1YiI6IjY0ZTA1N2IzYTNiNWU2MDFkNTllNDBmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL-9-aGTZekmss2g8FyA8FCJUW1_vbMIHkyffCYb1gE",
  accept: "application/json",
};
const { MOVIE_DATA, SEARCH_MOVIE_DATA } = ACTION_NAME;

export const getMovieData = (page, callBack) => {
  return (dispatch, getState) => {
    const movieData = getState((state) => state?.movieData?.payload?.movieData);
    console.log(movieData.movieData.payload.movieData, "mmmmmmmmmmmmmmmm");
    let modifiedMovieData = movieData.movieData.payload.movieData;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
        { headers }
      )
      .then(function (response) {
        if (page === 1) {
          callBack(response.data.results);
          dispatch({
            type: MOVIE_DATA,
            payload: {
              movieData: response.data.results,
            },
          });
        } else {
          const arr = modifiedMovieData?.concat(response?.data?.results); // Use safe navigation operators
          callBack(arr);

          dispatch({
            type: MOVIE_DATA,
            payload: {
              movieData: arr || [],
            },
          });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};

export const getSearchResult = (search, dispatch, page) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`,
      { headers }
    )
    .then(function (response) {
      dispatch({
        type: SEARCH_MOVIE_DATA,
        payload: {
          searchData: response.data.results,
        },
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};
