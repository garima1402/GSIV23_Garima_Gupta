import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import Description from "./description";
import "./details.css";
// import Title from "./title";
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
        console.log(response.data.results, "result");
        setDetail(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getDetail();
  }, []);
  return <div>I am here {id}</div>;
}
export default Details;
