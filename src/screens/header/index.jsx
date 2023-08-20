import React, { useEffect, useState } from "react";
import "./header.css";
import axios from "axios";
import Search from "./search";

function Header() {
  const [search, setsearch] = useState("");
  const searchData = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M2N2JkNGJlOGZiNzI3MWQ0Mjk2ZjVmYjIxZGI1OSIsInN1YiI6IjY0ZTA1N2IzYTNiNWU2MDFkNTllNDBmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL-9-aGTZekmss2g8FyA8FCJUW1_vbMIHkyffCYb1gE",
      accept: "application/json",
    },
  };
  const getSearchResult = () => {
    axios
      .request(searchData)
      .then(function (response) {
        console.log(response.data.results, "resssssssssss");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  // const handleSearch = (search) => {
  //   setsearch(search);
  //   getSearchResult(search);
  //   console.log(search, "search");
  // };
  useEffect(() => {
    getSearchResult();
  }, [search]);
  return (
    <div className="main-wrapper">
      <div className="header-logo"></div>
      <div className="header-content">
        <h2>Movies</h2>
      </div>
      <input
        name="search"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </div>
  );
}
export default Header;
