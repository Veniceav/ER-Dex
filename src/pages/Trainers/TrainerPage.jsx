import React, { useContext, useState, useMemo, useEffect } from "react";

import { DataContext } from "../../data/DataContext";

import "./TrainerPage.scss";

const TrainerPage = () => {
  const {
    data,
    handleAbilityChange,
    nameRegex,
    handleMoveChange,
    handlePokemonClick,
    setCurrentParty,
    currentParty,
    selectedTrainer,
    handleTrainerChange,
  } = useContext(DataContext);

  const trainers = data.trainers;
  const [toggleState, setToggleState] = useState(1);
  const [difficultyState, setDifficultyState] = useState("Normal");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleDifficulty = (state) => {
    setDifficultyState(state);
  };

  const getTrainerParty = () => {
    if (selectedTrainer) {
      let partyObj;

      // Check if selectedTrainer has the specified difficultyState
      if (difficultyState === "Insane") {
        partyObj = selectedTrainer.insane;
      } else if (difficultyState === "Normal") {
        partyObj = selectedTrainer.party;
      } else if (
        difficultyState === "Rem1" &&
        selectedTrainer.rem &&
        selectedTrainer.rem[0]
      ) {
        partyObj = selectedTrainer.rem[0].party;
      } else if (
        difficultyState === "Rem2" &&
        selectedTrainer.rem &&
        selectedTrainer.rem[1]
      ) {
        partyObj = selectedTrainer.rem[1].party;
      } else if (
        difficultyState === "Rem3" &&
        selectedTrainer.rem &&
        selectedTrainer.rem[2]
      ) {
        partyObj = selectedTrainer.rem[2].party;
      }

      if (partyObj) {
        return partyObj.map((pokemon) => {
          const pkmnObj = data.species[pokemon.spc];
          const pkmnName = pkmnObj.name;
          const pkmnAbility = [
            data.abilities[pkmnObj.stats.abis[pokemon.abi]].name,
            data.abilities[pkmnObj.stats.abis[pokemon.abi]].desc,
          ];
          const pkmnNature = data.natureT[pokemon.nature];
          let pkmnItem = data.items[pokemon.item].name;

          let pkmnTypes = [
            data.typeT[pkmnObj.stats.types[0]],
            data.typeT[pkmnObj.stats.types[1]],
          ];

          const pkmnMoves = pokemon.moves.map((move) => {
            const moveName = data.moves[move].name;
            return moveName;
          });
          let pokemonBuild = {
            name: pkmnName,
            ability: pkmnAbility,
            type: pkmnTypes,
            item: pkmnItem,
            moves: pkmnMoves,
            ivs: pokemon.ivs,
            evs: pokemon.evs,
            nature: pkmnNature,
          };
          console.log("build", pokemonBuild);
          return pokemonBuild;
        });
      } else {
        // Handle case where partyObj is undefined
        console.error(
          "Party object is undefined for the selected trainer and difficulty state"
        );
        return [];
      }
    } else {
      // Handle case where selectedTrainer is undefined
      console.error("Selected trainer is undefined");
      return [];
    }
  };

  useEffect(() => {
    const updateTrainerParty = () => {
      const party = getTrainerParty();
      setCurrentParty(party);
    };
    updateTrainerParty();
  }, [selectedTrainer, difficultyState]);

  const trainersArr = useMemo(() => {
    const filterTrainers = (trainers, trainerType) => {
      return trainers.filter((trainer) =>
        trainer.name.toLowerCase().includes(trainerType.toLowerCase())
      );
    };
    const excludeTrainers = (trainers, trainerType) => {
      return trainers.filter((trainer) => {
        const trainerName = trainer.name.toLowerCase();
        return !trainerType.some((excludeString) =>
          trainerName.includes(excludeString.toLowerCase())
        );
      });
    };

    let filteredTrainers = [];

    switch (toggleState) {
      case 1:
        filteredTrainers = trainers;
        break;
      case 2:
        filteredTrainers = filterTrainers(trainers, "Leader").concat(
          filterTrainers(trainers, "Elite Four")
        ); //Gym Leaders/Aqua and Magma Leaders
        break;
      case 3:
        filteredTrainers = filterTrainers(trainers, "Team Aqua").concat(
          filterTrainers(trainers, "Team Magma"),
          filterTrainers(trainers, "Admin")
        ); //Team Aqua/Magma Grunts
        break;
      case 4:
        filteredTrainers = excludeTrainers(trainers, [
          "Leader",
          "Team Aqua",
          "Team Magma",
          "Admin",
          "May",
          "Brendan",
          "Elite Four",
        ]); //Every other Trainer
        break;
      case 5:
        filteredTrainers = filterTrainers(trainers, "May").concat(
          filterTrainers(trainers, "Brendan")
        ); //Rivals
        break;
      default:
        filteredTrainers = [];
        break;
    }

    // Sort the filtered trainers alphabetically
    return filteredTrainers.sort((a, b) => a.name.localeCompare(b.name));
  }, [toggleState, trainers]);

  const TrainerList = () => {
    return (
      <div className="trainerList-listContainer">
        <ol>
          {trainersArr.map((trainer, index) => {
            return (
              <li
                key={index}
                value={trainer.name}
                id={index}
                onClick={() => {
                  handleTrainerChange(trainer);
                }}
              >
                {toggleState === 1 &&
                  trainer.name
                    .replace("Magma", "M.")
                    .replace("Aqua", "A.")
                    .replaceAll("Pkmn Trainer 3", "")}
                {toggleState === 2 &&
                  trainer.name.replace("Magma", "M.").replace("Aqua", "A.")}
                {toggleState === 3 &&
                  trainer.name.replace("Magma", "M.").replace("Aqua", "A.")}
                {toggleState === 4 &&
                  trainer.name.replace("Pkmn Trainer 3", "")}
                {toggleState === 5 &&
                  trainer.name.replace("Pkmn Trainer 3", "")}
              </li>
            );
          })}
        </ol>
      </div>
    );
  };

  const TrainerTeamTable = () => {
    const [toggleBType, setToggleBType] = useState(1);
    const toggleTab = (index) => {
      setToggleBType(index);
    };

    return (
      <div className="teamDataContainer">
        <div className="teamData-header">
          <div className="teamData-trainerName">{selectedTrainer.name}</div>
          <div className="teamData-battleType">
            <div
              className="battleType-tab"
              onClick={() => toggleDifficulty("Normal")}
            >
              Normal
            </div>
            <div
              className="battleType-tab"
              onClick={() => toggleDifficulty("Insane")}
            >
              Elite
            </div>
            <div className="battleType-tab rematches">
              Rematch:
              <div className="rematch-tabs">
                <div
                  className="remIndex"
                  onClick={() => toggleDifficulty("Rem1")}
                >
                  [1]
                </div>
                <div
                  className="remIndex"
                  onClick={() => toggleDifficulty("Rem2")}
                >
                  [2]
                </div>
                <div
                  className="remIndex"
                  onClick={() => toggleDifficulty("Rem3")}
                >
                  [3]
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teamData-pokemonContainer">
          <div className="teamTable">
            {currentParty
              ? currentParty.map((pokemon) => {
                  const statOrder = [
                    "HP",
                    "Atk",
                    "Def",
                    "Sp.Atk",
                    "Sp.Def",
                    " Spd",
                  ];

                  const filteredEvs = pokemon.evs.filter((ev) => ev !== 0);

                  return (
                    <div className="pokemonCard">
                      <div className="cardHeader">
                        <div
                          className="pokemonName"
                          onClick={() => handlePokemonClick(pokemon.name)}
                        >
                          {pokemon.name}
                        </div>
                        <div className="pokemonType">
                          <img
                            src={require(`../../assets/icons/types/${pokemon.type[0]}.png`)}
                            alt={pokemon.type[0]}
                          ></img>
                          {pokemon.type[1] == pokemon.type[0] ? (
                            ""
                          ) : (
                            <img
                              src={require(`../../assets/icons/types/${pokemon.type[1]}.png`)}
                              alt={pokemon.type[1]}
                            ></img>
                          )}
                        </div>
                      </div>
                      <div className="pokemonData">
                        <div className="pokemonData-details">
                          <div className="pokemonIcon">
                            <img
                              onClick={() => handlePokemonClick(pokemon.name)}
                              src={require(`../../assets/icons/sprites/${nameRegex(
                                pokemon.name
                              )}.png`)}
                              alt={pokemon.name}
                            ></img>
                          </div>
                          <div className="abi-item">
                            <div className="pokemonAbility">
                              <div
                                className="abilityName"
                                onClick={() =>
                                  handleAbilityChange(pokemon.ability[0])
                                }
                              >
                                Ability: {pokemon.ability[0]}
                              </div>
                              {/* <div className="abilityDesc">
                              {pokemon.ability[1]}
                            </div> */}
                            </div>
                            <div className="heldItem">
                              Held Item: {pokemon.item}
                            </div>
                            {/* <div className="heldItem-img">
                              {pokemon.item.endsWith("ite") ||
                              pokemon.item === "Heavy-Duty Boots" ? (
                                ""
                              ) : (
                                <img
                                  src={require(`../assets/icons/items/${pokemon.item
                                    .toLowerCase()
                                    .replace("-", " ")
                                    .replaceAll(" ", "_")}.png`)}
                                  alt={pokemon.item}
                                ></img>
                              )}
                            </div> */}
                          </div>
                        </div>
                        <div className="moveSet">
                          <div className="moveSet-title">Moves</div>
                          <div className="movesTable">
                            {pokemon.moves.map((move) => {
                              return (
                                <div
                                  className="move"
                                  onClick={() => handleMoveChange(move)}
                                >
                                  {move}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="ev-iv">
                          <div className="evs">
                            EVs:{" "}
                            {filteredEvs.map((ev, index) => {
                              return (
                                <div className="ev" key={index}>
                                  {
                                    statOrder.filter(
                                      (s, index) => pokemon.evs[index] !== 0
                                    )[index]
                                  }
                                  : {ev}
                                </div>
                              );
                            })}
                          </div>
                          <div className="ivs">
                            IVs:{" "}
                            {pokemon.ivs.map((iv, index) => {
                              return (
                                <div className="iv" key={index}>
                                  {statOrder[index]}
                                  :<br /> {iv}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="trainerDataContainer">
      <div className="trainerListContainer">
        <div className="trainerList-tabs">
          <div className="trainerTab" onClick={() => toggleTab(1)}>
            All
          </div>
          <div className="trainerTab" onClick={() => toggleTab(2)}>
            E4/Leaders
          </div>
          <div className="trainerTab" onClick={() => toggleTab(3)}>
            Aqua/Magma
          </div>
          <div className="trainerTab" onClick={() => toggleTab(4)}>
            Route Trainers
          </div>
          <div className="trainerTab" onClick={() => toggleTab(5)}>
            Rival
          </div>
        </div>
        <TrainerList />
      </div>
      <TrainerTeamTable />
    </div>
  );
};

export {
  TrainerPage
};
