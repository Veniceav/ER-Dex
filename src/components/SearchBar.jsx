import React, { useContext, useEffect } from "react";
import "./SearchBar.css";
import { DataContext } from "../data/DataContext";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(DataContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchValue(searchValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="searchBarContainer">
      <input
        autoFocus
        onChange={handleOnChange}
        value={searchValue}
        className="inputField"
        type="text"
        placeholder="Search here"
      ></input>
    </form>
  );
};

export default SearchBar;
