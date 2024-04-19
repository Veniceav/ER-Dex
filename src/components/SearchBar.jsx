import React, { useContext, useEffect, useState } from "react";
import "./SearchBar.css";
import { DataContext } from "../data/DataContext";

const SearchBar = () => {
  const { searchValue, setSearchValue, data, displayedPage, setDisplayedPage } =
    useContext(DataContext);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [searchValueChangedByInput, setSearchValueChangedByInput] =
    useState(false);

  useEffect(() => {
    // Filter suggestions based on the search value
    /* Im using searchValueChanged by input to determine whether it was searched via typing, 
    or selection(ie: Clicked on a pokemons name in th evo table or in the abilities List.
      This ensures that it doesnt popup unwanted suggestions outside of regular keyboard Input*/

    let filteredSuggestion = [];
    switch (displayedPage) {
      case "Pokemon":
        filteredSuggestion = data.species;
        break;
      case "Moves":
        filteredSuggestion = data.moves;
        break;
      case "Abilities":
        filteredSuggestion = data.abilities;
        break;
    }

    const filteredSuggestions = filteredSuggestion.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        pokemon.name !== "??????????" &&
        "-" &&
        "-------"
    );
    setSuggestions(filteredSuggestions.slice(0, 5));

    if (searchValueChangedByInput) {
      setSelectedSuggestionIndex(-1);
      setSearchValueChangedByInput(true);
    }
  }, [searchValue, data, searchValueChangedByInput]);

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
    setSearchValueChangedByInput(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion.name);
    setSuggestions([]); // Hide suggestions dropdown after selection
    setSearchValueChangedByInput(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      if (selectedSuggestionIndex !== -1) {
        setSearchValue(suggestions[selectedSuggestionIndex].name);
        setSuggestions([]);
        setSearchValueChangedByInput(false);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      );
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <form className="searchBarContainer">
      <input
        autoFocus
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={searchValue}
        className="inputField"
        type="text"
        placeholder="Search here"
      ></input>
      {searchValueChangedByInput && suggestions.length > 0 && (
        <ul className="suggestionsList">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={
                index === selectedSuggestionIndex
                  ? "suggestionItem selected"
                  : "suggestionItem"
              }
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
