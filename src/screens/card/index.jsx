import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router";
function Card() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const upcoming = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M2N2JkNGJlOGZiNzI3MWQ0Mjk2ZjVmYjIxZGI1OSIsInN1YiI6IjY0ZTA1N2IzYTNiNWU2MDFkNTllNDBmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL-9-aGTZekmss2g8FyA8FCJUW1_vbMIHkyffCYb1gE",
      accept: "application/json",
    },
  };

  const getUpcoming = () => {
    axios
      .request(upcoming)
      .then(function (response) {
        setData(response.data.results);
        console.log(response.data.results, "resssssssssss");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">Upcoming Series</h2>
        </div>

        <div className="card-box">
          {data?.map((item, index) => {
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
    </div>
  );
}
export default Card;
