import axios from "axios";
import { ACTION_NAME } from "./actionName";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M2N2JkNGJlOGZiNzI3MWQ0Mjk2ZjVmYjIxZGI1OSIsInN1YiI6IjY0ZTA1N2IzYTNiNWU2MDFkNTllNDBmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL-9-aGTZekmss2g8FyA8FCJUW1_vbMIHkyffCYb1gE",
  accept: "application/json",
};
const { MOVIE_DATA } = ACTION_NAME;

export const getMovieData = (page) => {
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
          dispatch({
            type: MOVIE_DATA,
            payload: {
              movieData: response.data.results,
            },
          });
        } else {
          const arr = modifiedMovieData?.concat(response?.data?.results); // Use safe navigation operators
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

export const getSearchResult = (search) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
        { headers }
      )
      .then(function (response) {
        console.log(search, response,'resssssssssssssssss');
        // dispatch({
        //   type: MOVIE_DATA,
        //   payload: response.data.results,
        // });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};
