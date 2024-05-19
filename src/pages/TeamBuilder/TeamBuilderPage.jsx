import React, { useState, useEffect, useContext, useMemo } from "react";

import { DataContext } from "../../data/DataContext";

import "./TeamBuilderPage.scss";

const SearchHandler = ({
  searchValue,
  setSearchValue,
  suggestions,
  setSuggestions,
  searchValueChangedByInput,
  setSearchValueChangedByInput,
  setCurrentRoster,
  currentRoster,
  selectedSuggestionIndex,
  setSelectedSuggestionIndex,
  selectedSlot,
  setSelectedSlot,
  selectedPokemon,
  selectedPokemonData,
}) => {
  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion.name);
    setSuggestions([]); // Hide suggestions dropdown after selection
    setSearchValueChangedByInput(false);
  };

  const handleButtonPress = (suggestion) => {
    setSearchValue(suggestion.name);
    setSuggestions([]); // Hide suggestions dropdown after selection
    setSearchValueChangedByInput(false);
    const coppiedRoster = { ...currentRoster };
    const idx = currentRoster.slots.indexOf(selectedSlot[0]);
    const currentRosterPointer = coppiedRoster.slots[idx];
    currentRosterPointer.name = selectedPokemon.name;
    currentRosterPointer.baseStats = selectedPokemonData.baseStats;
    currentRosterPointer.ability = selectedPokemonData.abis[0].name;
    currentRosterPointer.innates = selectedPokemonData.inns.map(
      (innate) => innate.name
    );
    currentRosterPointer.types = selectedPokemonData.types;
    setCurrentRoster((currentRoster) => ({
      ...currentRoster,
      ...coppiedRoster,
    }));
    // console.log("roster", currentRoster);
  };

  const SearchBar = () => {
    const handleOnChange = (e) => {
      setSearchValue(e.target.value);
      if (searchValueChangedByInput !== true) {
        setSearchValueChangedByInput(true);
      }
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
          placeholder="Pokemon Lookup"
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

  const SlotDropDownMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleList = () => {
      setOpen((prev) => !prev);
    };

    const handleSelectedSlot = (item) => {
      const findSelectedSlot = currentRoster.slots.filter(
        (slot) => slot.id === item
      );
      setSelectedSlot(findSelectedSlot);
      toggleList();
    };

    const DropDownItems = () => {
      const mappedItems = currentRoster.slots.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => handleSelectedSlot(item.id)}
            className="dropDown-item"
          >
            <p>{item.name}</p>
          </li>
        );
      });
      return mappedItems;
    };

    return (
      <div className="slotContainer">
        <div className="slot-header">
          {selectedSlot === null ? "Select Slot" : selectedSlot[0].name}
          {open ? (
            <i className="arrow up" onClick={() => toggleList()}></i>
          ) : (
            <i className="arrow down" onClick={() => toggleList()}></i>
          )}
        </div>

        <ul className="dropDown">{open && <DropDownItems />}</ul>
      </div>
    );
  };

  return (
    <div className="searchHandlerContainer">
      <SearchBar />
      <SlotDropDownMenu />
      <button
        className="addButton"
        onClick={() => handleButtonPress(selectedPokemon)}
      >
        +
      </button>
    </div>
  );
};

const TeamBuilder = () => {
  const { data, nameRegex, setDisplayedPage } = useContext(DataContext);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [searchValueChangedByInput, setSearchValueChangedByInput] =
    useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [selectedPokemonData, setSelectedPokemonData] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [moveSetArr, setMoveSetArr] = useState(1);

  let slotItems = {
    slots: [
      {
        id: 1,
        name: "Slot 1",
        types: [],
        baseStats: [],
        ability: "",
        innates: [],
        evs: [],
        ivs: [],
        level: 1,
      },
      {
        id: 2,
        name: "Slot 2",
        types: [],
        baseStats: [],
        ability: "",
        innates: [],
        evs: [],
        ivs: [],
        level: 1,
      },
      {
        id: 3,
        name: "Slot 3",
        types: [],
        baseStats: [],
        ability: "",
        innates: [],
        evs: [],
        ivs: [],
        level: 1,
      },
      {
        id: 4,
        name: "Slot 4",
        types: [],
        baseStats: [],
        ability: "",
        innates: [],
        evs: [],
        ivs: [],
        level: 1,
      },
      {
        id: 5,
        name: "Slot 5",
        types: [],
        baseStats: [],
        ability: "",
        innates: [],
        evs: [],
        ivs: [],
        level: 1,
      },
      {
        id: 6,
        name: "Slot 6",
        types: [],
        baseStats: [],
        ability: "",
        innates: [],
        evs: [],
        ivs: [],
        level: 1,
        moves: [],
      },
    ],
  };

  const movesArr = useMemo(() => {
    const getMovesData = (moves, moveType) => {
      let movesArr = [];
      if (selectedPokemon) {
        if (moves.length === 0) return [];

        if (moveType === "levelUpMoves") {
          movesArr = moves.map(({ id }) => data.moves[id]);
        } else {
          movesArr = moves.map((moveId) => {
            if (moveId !== "-") return data.moves[moveId];
          });
        }
      }
      return movesArr;
    };
    switch (moveSetArr) {
      case 1:
        return getMovesData(selectedPokemon.levelUpMoves, "levelUpMoves");
      case 2:
        return getMovesData(selectedPokemon.TMHMMoves, "tmHmMoves");
      case 3:
        return getMovesData(selectedPokemon.tutor, "tutorMoves");
      case 4:
        return getMovesData(selectedPokemon.eggMoves, "eggMoves");
      default:
        return [];
    }
  }, [
    moveSetArr,
    data.moves,
    selectedPokemon.levelUpMoves,
    selectedPokemon.TMHMMoves,
    selectedPokemon.tutor,
    selectedPokemon.eggMoves,
  ]);

  const [currentRoster, setCurrentRoster] = useState(slotItems);

  useEffect(() => {
    const getSelectedData = () => {
      const selectedMonArr = data.species.filter((pokemon) => {
        const targetMon = pokemon.name.toLowerCase();
        return targetMon.includes(searchValue.toLowerCase());
      });

      if (
        selectedMonArr.length === 0 ||
        selectedMonArr[0].name === "??????????"
      ) {
        // console.log("No Mons Found");
        return;
      }

      const newSelectedMon = selectedMonArr[0];

      setSelectedPokemon(newSelectedMon);
    };

    getSelectedData();

    const allTypes = data.typeT;
    const allMoves = data.moves;
    const allAbilities = data.abilities;

    if (selectedPokemon) {
      const getTargetStats = () => {
        const statsObj = selectedPokemon.stats;
        const baseStats = statsObj.base;
        const abilitiesIndex = statsObj.abis;
        const innatesIndex = statsObj.inns;
        const typesIndex = statsObj.types;

        const abilities = abilitiesIndex.map(
          (abilityIndex) => allAbilities[abilityIndex]
        );
        const innates = innatesIndex.map(
          (innateIndex) => allAbilities[innateIndex]
        );
        const [type1, type2] = typesIndex.map((types) => allTypes[types]);

        const pkmnObj = {
          name: selectedPokemon.name,
          baseStats: baseStats,
          abis: abilities,
          inns: innates,
          types: [type1, type2],
          moves: [movesArr],
        };

        setSelectedPokemonData(pkmnObj);
        // console.log(selectedPokemonData);
      };
      getTargetStats();
    }
  }, [searchValue, selectedPokemon, movesArr]);

  useEffect(() => {
    const filteredSuggestions = data.species.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        pokemon.name !== "??????????"
    );
    setSuggestions(filteredSuggestions.slice(0, 5));

    if (searchValueChangedByInput) {
      setSelectedSuggestionIndex(-1);
      setSearchValueChangedByInput(true);
    }
  }, [data, searchValue, searchValueChangedByInput]);

  const DataSideBar = ({ selectedAbility, setSelectedAbility }) => {
    const [open, setOpen] = useState(false);
    const [moveTableView, setMoveTableView] = useState(true);

    const toggleList = () => {
      setOpen((prev) => !prev);
    };

    const handleMoveTableChange = (num) => {
      setMoveSetArr(num);
      // console.log("arr", selectedPokemonData.moves);
    };

    const AbilityOptions = () => {
      const mappedAbilities = selectedPokemonData.abis.map((ability) => {
        return (
          <li
            key={ability.name}
            className="dropDown-item"
            onClick={() => handleSelectedAbility(ability)}
          >
            <p>{ability.name}</p>
          </li>
        );
      });
      return mappedAbilities;
    };

    const handleSelectedAbility = (ability) => {
      setSelectedAbility(ability.name);
      toggleList();
    };
    // const hpFormula = ((2*base + iv, + ev/4 + 100) * level) / 100 + 10;
    // const statFormula = ((2*base + iv + ev/4) * level) / 100 + 5 * nature;
    let movesArr = {
      moveSet: [
        {
          name: "Move1",
        },
        {
          name: "Move2",
        },
        {
          name: "Move3",
        },
        {
          name: "Move4",
        },
      ],
    };
    const [moves, setMoves] = useState([movesArr.moveSet]);
    const moveTableTabs = ["Level Up", "TM/HM", "Tutor", "Egg"];
    const MoveTable = () => {
      return (
        <div className="moveTable-Container">
          <div className="table-tabs">
            {moveTableTabs.map((tab, index) => {
              return (
                <div
                  onClick={() => handleMoveTableChange(index + 1)}
                  className="tab"
                >
                  {tab}
                </div>
              );
            })}
          </div>
          <table className="moveTable">
            <thead className="table-header">
              <tr className="tableRow">
                <th>Moves</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {selectedPokemonData &&
                selectedPokemonData.moves[0].map((move, index) => {
                  const moveSplit = data.splitT[move.split];
                  const moveType = data.typeT[move.types];

                  return (
                    <tr key={move.name} className="tableRow">
                      <td className="nameCol">{move.name}</td>
                      <td className="typeCol">
                        <img
                          src={require(`../../assets/icons/types/${moveType}.png`)}
                          alt={moveType}
                        />
                      </td>
                      <td className="splitCol">
                        {["PHYSICAL", "SPECIAL", "STATUS"].includes(
                          moveSplit
                        ) && (
                          <img
                            src={require(`../../assets/icons/${moveSplit}.png`)}
                            alt={moveSplit}
                          />
                        )}
                      </td>
                      <td className="powerCol">{move.pwr}</td>
                      <td className="accuracyCol">{move.acc}</td>
                      <td className="ppCol">{move.pp}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      );
    };

    return (
      <div className="pokemonDataContainer">
        {selectedPokemonData !== null && (
          <div className="pokemonData-displayCard">
            <div className="displayCard-header">
              <div className="card-pokemonName">{selectedPokemonData.name}</div>
              {selectedPokemonData.types[1] === selectedPokemonData.types[0] ? (
                <div className="card-types">
                  <img
                    src={require(`../../assets/icons/types/${selectedPokemonData.types[0]}.png`)}
                    alt={selectedPokemonData.types[0]}
                  />
                </div>
              ) : (
                <div className="card-types">
                  {selectedPokemonData.types.map((type) => {
                    return (
                      <img
                        src={require(`../../assets/icons/types/${type}.png`)}
                        alt={type}
                      />
                    );
                  })}
                </div>
              )}
              <form className="level-details">
                <label
                  className="level-label
              "
                >
                  Level
                </label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  name="Level"
                  value={selectedPokemonData.level}
                  className="level-input"
                />
              </form>
            </div>
            <div className="card-Icon">
              <img
                src={require(`../../assets/icons/sprites/${nameRegex(
                  selectedPokemonData.name
                )}.png`)}
                alt={selectedPokemonData.name}
              ></img>
            </div>
            <div className="pokeball-bg"></div>
          </div>
        )}
        {selectedPokemonData !== null && (
          <div className="pokemonData-details">
            <div className="move-details">
              <label>Moves</label>
              <div className="move-grid">
                {moves[0].map((move) => {
                  return (
                    <input
                      type="text"
                      name={move.name}
                      className="grid-Item"
                      placeholder={move.name}
                    />
                  );
                })}
              </div>
            </div>
            <div className="ability-details">
              <div className="main-ability">
                <label className="main-label">Ability</label>
                <div className="ability-input">
                  {selectedAbility ? selectedAbility : "Pick 1"}
                  {open ? (
                    <i className="arrow up" onClick={() => toggleList()}></i>
                  ) : (
                    <i className="arrow down" onClick={() => toggleList()}></i>
                  )}
                </div>
                <ul className="dropDown ability-items">
                  {open ? <AbilityOptions /> : ""}
                </ul>
              </div>
              <div className="innate-ability">
                <label className="innates-label">Innates</label>
                <ul className="innate-list">
                  {selectedPokemonData.inns.map((innate) => {
                    return <li className="innate-list-item">{innate.name}</li>;
                  })}
                </ul>
              </div>
            </div>
            {moveTableView && <MoveTable />}
          </div>
        )}
      </div>
    );
  };

  const RosterTableContainer = () => {
    const handleSelectedSlot = (id) => {
      const findSelectedSlot = currentRoster.slots.filter(
        (slot) => slot.id === id
      );
      setSelectedSlot(findSelectedSlot);
    };
    const statTitles = ["Hp", "Atk", "Def", "Sp. Atk", "Sp. Def", "Speed"];
    return (
      <div className="rosterTableContainer">
        <div className="rosterTable">
          {currentRoster.slots.map((slot) => {
            return (
              <div
                className="pokemonCard"
                onClick={() => handleSelectedSlot(slot.id)}
              >
                <div className="card-pokemonName">{slot.name}</div>
                {slot.types[0] === slot.types[1] ? (
                  <div className="card-pokemontypes">{slot.types[0]}</div>
                ) : (
                  <div className="card-pokemontypes">
                    {slot.types[0]} {slot.types[1]}
                  </div>
                )}
                {slot.ability}
                <div className="baseStats">
                  Base:
                  {slot.baseStats.map((stat, index) => {
                    return (
                      <p>
                        {statTitles[index]}:{stat}
                      </p>
                    );
                  })}
                </div>
                {slot.innates}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="tBuilderContainer">
      <DataSideBar
        setSelectedAbility={setSelectedAbility}
        selectedAbility={selectedAbility}
      />
      <div className="tBuilder-rosterContainer">
        <div className="roster-header">
          <div className="header-title">Team Builder</div>
          <div className="header-search">
            <SearchHandler
              suggestions={suggestions}
              setSuggestions={setSuggestions}
              currentRoster={currentRoster}
              setCurrentRoster={setCurrentRoster}
              selectedSuggestionIndex={selectedSuggestionIndex}
              setSelectedSuggestionIndex={setSelectedSuggestionIndex}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
              selectedPokemon={selectedPokemon}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchValueChangedByInput={searchValueChangedByInput}
              setSearchValueChangedByInput={setSearchValueChangedByInput}
              selectedPokemonData={selectedPokemonData}
            />
          </div>
        </div>
        <div className="tBuilder-body">
          <RosterTableContainer />
        </div>
      </div>
    </div>
  );
};

export {
  TeamBuilder
};
