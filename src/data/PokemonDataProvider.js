import React, { useState, useEffect } from "react";
import { DataContext } from "./DataContext";
import gameData from "../gameDataV1.6.1";

const PokemonDataProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(gameData.species[1]);
  const [name, setName] = useState("");
  const [types, setTypes] = useState([gameData]);
  const [abilities, setAbilities] = useState(filteredData.stats.abis);
  const [innates, setInnates] = useState(filteredData.stats.inns);
  const [evolutions, setEvolutions] = useState(filteredData.evolutions);
  const [stats, setStats] = useState([]);
  const [levelUpMoves, setLevelUpMoves] = useState([]);
  const [eggMoves, setEggMoves] = useState([]);
  const [tmHmMoves, setTmHmMoves] = useState([]);
  const [tutorMoves, setTutorMoves] = useState([]);
  const [displayedPage, setDisplayedPage] = useState("Pokemon");
  const data = gameData;

  const resultsArray = gameData.species.filter((pokemon) => {
    const targetItem = pokemon.name.toLowerCase();
    return targetItem.includes(searchValue.toLowerCase());
  });

  const finalResult = resultsArray[0];

  useEffect(() => {
    if (resultsArray.length === 0 || finalResult.name === "??????????") {
      console.log("No Pokemon Found");
      return;
    } else {
      setFilteredData(finalResult);
      setName(filteredData.name);
      setTypes(filteredData.stats.types);
      setAbilities(filteredData.stats.abis);
      setInnates(filteredData.stats.inns);
      setEvolutions(filteredData.evolutions);
      setStats(filteredData.stats.base);
      setLevelUpMoves(filteredData.levelUpMoves);
      setTmHmMoves(filteredData.TMHMMoves);
      setTutorMoves(filteredData.tutor);
      setEggMoves(filteredData.eggMoves);
    }
  }, [resultsArray]);

  const imageName = name.toUpperCase().replaceAll(" ", "_");

  const [abilityTitle, setAbilityTitle] = useState("");
  const [abilityDescription, setAbilityDescription] = useState("");
  const [filteredPokemon, setfilteredPokemon] = useState([]);

  const abilityNames = data.abilities.map((e) => {
    const getAbilityNames = e.name;
    return getAbilityNames;
  });

  const filterbyAbility = (matchingIndex) => {
    const filteredAbility = gameData.species.filter((pokemon) => {
      if (pokemon.stats.abis[0] === matchingIndex) {
        return true;
      }
      if (pokemon.stats.abis[1] === matchingIndex) {
        return true;
      }
      if (pokemon.stats.abis[2] === matchingIndex) {
        return true;
      }
      if (pokemon.stats.inns[0] === matchingIndex) {
        return true;
      }
      if (pokemon.stats.inns[1] === matchingIndex) {
        return true;
      }
      if (pokemon.stats.inns[2] === matchingIndex) {
        return true;
      }
    });
    return filteredAbility;
  };

  const handleAbilityChange = (ability) => {
    const getIndex = abilityNames.indexOf(ability);
    setAbilityTitle(ability);
    setAbilityDescription(gameData.abilities[getIndex].desc);
    setfilteredPokemon(filterbyAbility(Number(getIndex)));
    if (displayedPage !== "Abilities") {
      setDisplayedPage("Abilities");
    }
  };

  const handleTitleChange = (event) => {
    event.preventDefault();
    const value = event.target.getAttribute("value");
    const getIndex = event.target.getAttribute("id");
    setAbilityDescription(gameData.abilities[getIndex].desc);
    setAbilityTitle(value);
    setfilteredPokemon(filterbyAbility(Number(getIndex)));
  };

  const providerState = {
    searchValue,
    setSearchValue,
    displayedPage,
    setDisplayedPage,
    data,
    name,
    types,
    abilities,
    innates,
    evolutions,
    stats,
    levelUpMoves,
    tmHmMoves,
    tutorMoves,
    eggMoves,
    imageName,
    handleAbilityChange,
    handleTitleChange,
    abilityNames,
    filteredPokemon,
    abilityTitle,
    abilityDescription,
  };

  return (
    <DataContext.Provider value={providerState}>
      {children}
    </DataContext.Provider>
  );
};

export default PokemonDataProvider;
