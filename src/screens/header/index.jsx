import React, { useEffect, useState } from "react";
import "./header.css";
import axios from "axios";
import Search from "./search";
import { getSearchResult } from "../../redux/action";
import { useDispatch } from "react-redux";

function Header() {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    getSearchResult(search);
  }, [search]);
  const handleSearch = () => {
    dispatch(getSearchResult(search));
  };
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
      <button onClick={() => handleSearch}>Search</button>
    </div>
  );
}
export default Header;
