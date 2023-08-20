import React, { useEffect, useState } from "react";

const Search = ({ placeholder, setQuery, value = "", sx = {} }) => {
  const [searchQuery, setSearchQuery] = useState();
  const [searchTimeout, setSearchTimeout] = useState();

  useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  //debounce : search after 500ms of typing
  const handleSearchChange = (e) => {
    clearInterval(searchTimeout);
    if (e.target.value.trimStart().length > 3) {
      setSearchTimeout(
        setTimeout(() => {
          setQuery(e.target.value.trimStart());
        }, 500)
      );
    }
    if (!e.target.value) {
      setSearchTimeout(
        setTimeout(() => {
          setQuery(e.target.value.trimStart());
        }, 500)
      );
    }
    setSearchQuery(e.target.value.trimStart());
  };

  return (
    <input
      placeholder={placeholder}
      size="small"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default Search;
