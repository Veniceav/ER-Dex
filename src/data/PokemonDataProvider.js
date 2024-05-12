import React, { useState, useEffect } from "react";
import { DataContext } from "./DataContext";
import gameData from "../gameData";

const PokemonDataProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [innates, setInnates] = useState([]);
  const [evolutions, setEvolutions] = useState([]);
  const [stats, setStats] = useState([]);
  const [levelUpMoves, setLevelUpMoves] = useState([]);
  const [eggMoves, setEggMoves] = useState([]);
  const [tmHmMoves, setTmHmMoves] = useState([]);
  const [tutorMoves, setTutorMoves] = useState([]);
  const [displayedPage, setDisplayedPage] = useState("Pokemon");
  const [abilityTitle, setAbilityTitle] = useState("");
  const [abilityDescription, setAbilityDescription] = useState("");
  const [moveTitle, setMoveTitle] = useState("");
  const [moveDescription, setMoveDescription] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [filteredPokemonMoves, setFilteredPokemonMoves] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState([]);
  const [currentParty, setCurrentParty] = useState([]);

  const nameRegex = (name) => {
    let fixedName = name
      .toUpperCase()
      .replace(/[:\s-.]/g, "_")
      .replace("♀", "(F)")
      .replaceAll("♂", "(M)");

    if (name === "MimeJr.") fixedName = "MIME_JR";

    return fixedName;
  };

  useEffect(() => {
    const getPokemonData = () => {
      const resultsArray = gameData.species.filter((pokemon) => {
        const targetItem = pokemon.name.toLowerCase();
        return targetItem.includes(searchValue.toLowerCase());
      });

      if (resultsArray.length === 0 || resultsArray[0].name === "??????????") {
        console.log("No Pokemon Found");
        setFilteredData(null); // Reset filteredData to null
        return;
      }

      const finalResult = resultsArray[0];

      setFilteredData(finalResult);
      setName(finalResult.name);
      setTypes(finalResult.stats.types);
      setAbilities(finalResult.stats.abis);
      setInnates(finalResult.stats.inns);
      setEvolutions(finalResult.evolutions);
      setStats(finalResult.stats.base);
      setLevelUpMoves(finalResult.levelUpMoves);
      setTmHmMoves(finalResult.TMHMMoves);
      setTutorMoves(finalResult.tutor);
      setEggMoves(finalResult.eggMoves);
    };

    const getMoveData = () => {
      const resultsArray = gameData.moves.filter((move) => {
        const targetItem = move.name.toLowerCase();
        return targetItem.includes(searchValue.toLowerCase());
      });

      if (resultsArray.length === 0 || resultsArray[0].name === "-") {
        console.log("No moves found");
        return;
      }
      const finalResult = resultsArray[0];
      handleMoveChange(finalResult.name);
    };

    const getAbilityData = () => {
      const resultsArray = gameData.abilities.filter((ability) => {
        const targetItem = ability.name.toLowerCase();
        return targetItem.includes(searchValue.toLowerCase());
      });

      if (resultsArray.length === 0 || resultsArray[0].name === "-------") {
        console.log("No abilities found");
        return;
      }
      const finalResult = resultsArray[0];
      handleAbilityChange(finalResult.name);
    };

    const getTrainerData = () => {
      const resultsArray = gameData.trainers.filter((trainer) => {
        const targetItem = trainer.name.toLowerCase();
        return targetItem.includes(searchValue.toLowerCase());
      });

      const finalResult = resultsArray[0];
      handleTrainerChange(finalResult);
    };

    if (displayedPage === "Pokemon") getPokemonData();
    if (displayedPage === "Moves") getMoveData();
    if (displayedPage === "Abilities") getAbilityData();
    if (displayedPage === "Trainers") getTrainerData();
  }, [searchValue]);

  const moveNames = gameData.moves.map((e) => e.name);

  const abilityNames = gameData.abilities.map((e) => {
    return e.name;
  });

  const filterbyAbility = (matchingIndex) => {
    const filteredAbility = gameData.species.filter((pokemon) => {
      if (
        pokemon.stats.abis.includes(matchingIndex) ||
        pokemon.stats.inns.includes(matchingIndex)
      ) {
        return true;
      }
      return false;
    });
    return filteredAbility;
  };

  const filterByMove = (matchingIndex) => {
    const filteredMoves = gameData.species
      .map((pokemon) => {
        const moveLearnType = [];

        if (pokemon.levelUpMoves.some((move) => move.id === matchingIndex)) {
          moveLearnType.push("Level Up");
        }
        if (pokemon.TMHMMoves.includes(matchingIndex)) {
          moveLearnType.push("TM/HM");
        }
        if (pokemon.tutor.includes(matchingIndex)) {
          moveLearnType.push("Tutor");
        }
        if (pokemon.eggMoves.includes(matchingIndex)) {
          moveLearnType.push("Egg");
        }

        return {
          ...pokemon,
          moveLearnType,
        };
      })
      .filter((pokemon) => {
        const levelUpMovesId = pokemon.levelUpMoves.map((move) => move.id);
        return (
          pokemon.name !== "??????????" &&
          (levelUpMovesId.includes(matchingIndex) ||
            pokemon.TMHMMoves.includes(matchingIndex) ||
            pokemon.tutor.includes(matchingIndex) ||
            pokemon.eggMoves.includes(matchingIndex))
        );
      });
    return filteredMoves;
  };

  const handleMoveChange = (move) => {
    const getIndex = moveNames.indexOf(move);
    setMoveTitle(move);
    setMoveDescription(gameData.moves[getIndex].desc);
    setFilteredPokemonMoves(filterByMove(Number(getIndex)));
    if (displayedPage !== "Moves") setDisplayedPage("Moves");
  };

  const handleAbilityChange = (ability) => {
    const getIndex = abilityNames.indexOf(ability);
    setAbilityTitle(ability);
    setAbilityDescription(gameData.abilities[getIndex].desc);
    // console.log(abilityTitle);
    setFilteredPokemon(filterbyAbility(Number(getIndex)));
    if (displayedPage !== "Abilities") {
      setDisplayedPage("Abilities");
    }
  };

  const handleTitleChange = (event) => {
    event.preventDefault();
    const value = event.target.getAttribute("value");
    const getIndex = abilityNames.indexOf(value);
    setAbilityDescription(gameData.abilities[getIndex].desc);
    setAbilityTitle(value);
    setFilteredPokemon(filterbyAbility(Number(getIndex)));
  };

  const handlePokemonClick = (name) => {
    setSearchValue(name.replace(":", ""));
    setDisplayedPage("Pokemon");
  };

  const handleTrainerChange = (trainer) => {
    setSelectedTrainer(trainer);
    // console.log("Trainer", selectedTrainer);
  };

  const providerState = {
    searchValue,
    setSearchValue,
    displayedPage,
    setDisplayedPage,
    data: gameData,
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
    handleAbilityChange,
    handleTitleChange,
    handleMoveChange,
    moveNames,
    abilityNames,
    filteredPokemon,
    filteredPokemonMoves,
    abilityTitle,
    abilityDescription,
    moveTitle,
    moveDescription,
    nameRegex,
    handlePokemonClick,
    selectedTrainer,
    setSelectedTrainer,
    currentParty,
    setCurrentParty,
    handleTrainerChange,
  };

  return (
    <DataContext.Provider value={providerState}>
      {children}
    </DataContext.Provider>
  );
};

export default PokemonDataProvider;
