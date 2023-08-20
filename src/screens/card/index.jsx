import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router";
function Card() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();

  const upcoming = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
        setTitle(response.data.results);
        console.log(response.data.results, "resssssssssss");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //     axios
  //       .request(options2020)
  //       .then(function (response) {
  //         setTitle2020(response.data.results);
  //         console.log(response.data.results);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   };
  //   const get2021 = () => {
  //     axios
  //       .request(options2021)
  //       .then(function (response) {
  //         setTitle2021(response.data.results);
  //         console.log(response.data.results);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   };
  //   const get2022 = () => {
  //     axios
  //       .request(options2022)
  //       .then(function (response) {
  //         setTitle2022(response.data.results);
  //         console.log(response.data.results);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   };
  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">Upcoming Series</h2>
          {/* <h2 className="sub-text">10 entries with carousel</h2> */}
        </div>

        <div className="card-box">
          {title?.map((item, index) => {
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
                  <h3 className="image-name">{item?.original_title}</h3>
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
