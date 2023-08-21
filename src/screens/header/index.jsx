import React, { useEffect, useState } from "react";
import "./header.css";
import { getSearchResult } from "../../redux/action";
import { useDispatch } from "react-redux";
function Header() {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      getSearchResult(search, dispatch, 1);
    }, 1000);
  }, [search]);
  return (
    <div className="main-wrapper">
      <div className="header-logo"></div>
      <div className="header-content">
        <h2>Movies</h2>
      </div>
      <input
        name="search"
        className="search-bar"
        placeholder="Search by title"
        value={search}
        style={{}}
        onChange={(e) => setsearch(e.target.value)}
      />
    </div>
  );
}
export default Header;
