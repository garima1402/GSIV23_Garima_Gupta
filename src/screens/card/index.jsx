import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getMovieData } from "../../redux/action";

function Card() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const movieData = useSelector(
    (state) => state?.movieData?.payload?.movieData
  );

  useEffect(() => {
    dispatch(getMovieData(1));
  }, []);
  useEffect(() => {
    dispatch(getMovieData(page));
  }, [page]);
  return (
    <div>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">Upcoming Series</h2>
        </div>

        <div className="card-box">
          {movieData?.map((item, index) => {
            return (
              <div
                key={index}
                className="row"
                onClick={() => {
                  navigate(`/details/${item.id}`);
                }}
              >
                <img
                  className="image"
                  src={
                    item?.poster_path
                      ? `https://image.tmdb.org/t/p/w220_and_h330_face${item?.poster_path}`
                      : "noImage.png"
                  }
                  alt="No Image"
                />
                <div className="movie-des">
                  <h3 className="image-name">{item?.original_data}</h3>
                  <p>{item.vote_average}</p>
                </div>
                <p style={{ margin: "12px " }}>{item?.overview}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => setPage(page + 1)}>Show More</button>
    </div>
  );
}
export default Card;
