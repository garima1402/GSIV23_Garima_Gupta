import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./details.css";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [detailData, setDetail] = useState();
  const options = {
    method: "GET",

    url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M2N2JkNGJlOGZiNzI3MWQ0Mjk2ZjVmYjIxZGI1OSIsInN1YiI6IjY0ZTA1N2IzYTNiNWU2MDFkNTllNDBmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL-9-aGTZekmss2g8FyA8FCJUW1_vbMIHkyffCYb1gE",
      accept: "application/json",
    },
  };
  const getDetail = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "result");
        setDetail(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getDetail();
  }, []);
  const date = new Date(detailData?.release_date);
  const year = date.getFullYear();

  const totalMinutes = detailData?.runtime;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  console.log(`${hours} hours and ${minutes} minutes`);

  return (
    <div className="wrapper">
      <div className="image-container">
        <img
          className="image-detail"
          src={
            detailData?.poster_path
              ? `https://image.tmdb.org/t/p/w220_and_h330_face${detailData?.poster_path}`
              : "noImage.png"
          }
          alt="myImg"
        />
      </div>
      <div className="container">
        <div className="title-container">
          <h1 className="title">{detailData?.title}</h1>
          <h1 className="rating">
            {detailData ? `(${detailData?.vote_average})` : ""}
          </h1>
        </div>

        <div className="des-container">
          <p>
            {year} | {`${hours} Hr ${minutes} min`} | {detailData?.tagline}
          </p>
          {/* <p>{`${hours} Hr ${minutes} min`}</p>
          <p>{detailData?.tagline}</p> */}
        </div>
        <p className="des-text">{detailData?.overview}</p>
      </div>
    </div>
  );
}
export default Details;
