import React, { useState } from "react";
import "./header.css";
import axios from "axios";
import Search from "./search";

function Header() {
  const [value, setValue] = useState("");
  const search = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M2N2JkNGJlOGZiNzI3MWQ0Mjk2ZjVmYjIxZGI1OSIsInN1YiI6IjY0ZTA1N2IzYTNiNWU2MDFkNTllNDBmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL-9-aGTZekmss2g8FyA8FCJUW1_vbMIHkyffCYb1gE",
      accept: "application/json",
    },
  };
  const getSearchResult = () => {
    axios
      .request(search)
      .then(function (response) {
        console.log(response.data.results, "resssssssssss");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleSearch = (value) => {
    setValue(value);
    getSearchResult(value);
    console.log(value, "value");
  };
  return (
    <div className="main-wrapper">
      <div className="header-logo"></div>
      <div className="header-content">
        <h2>Movies</h2>
      </div>
    </div>
  );
}
export default Header;
