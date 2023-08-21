import React, { useEffect, useState } from "react";
import "./header.css";
import { getSearchResult } from "../../redux/action";

function Header() {
  const [search, setsearch] = useState("");
  useEffect(() => {
    setTimeout(() => {
      getSearchResult(search);
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
        placeholder="Search by title"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </div>
  );
}
export default Header;
