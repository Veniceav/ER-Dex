import React, { useContext, useState, useMemo, useEffect } from "react";
import "./TrainerPage.css";
import { DataContext } from "../data/DataContext";

const TrainerPage = () => {
  const {
    data,
    setSearchValue,
    setDisplayedPage,
    handleAbilityChange,
    nameRegex,
    handleMoveChange,
  } = useContext(DataContext);
  const [selectedTrainer, setSelectedTrainer] = useState([]);
  const [currentParty, setCurrentParty] = useState([]);
  // const [selectedBattleType, setSelectedBattleType] = useState("party");
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getTrainerParty = () => {
    if (selectedTrainer.party !== undefined) {
      let partyObj = selectedTrainer.party.map((pokemon) => {
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
          // const moveDesc = data.moves[move].desc;
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
      return partyObj;
    }
  };

  const handleTrainerChange = (trainer) => {
    setSelectedTrainer(trainer);
  };

  useEffect(() => {
    setCurrentParty(getTrainerParty);
    console.log(selectedTrainer);
  }, [selectedTrainer]);

  const trainers = data.trainers;

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
        filteredTrainers = filterTrainers(trainers, "Leader"); //Gym Leaders/Aqua and Magma Leaders
        break;
      case 2:
        filteredTrainers = filterTrainers(trainers, "Team Aqua").concat(
          filterTrainers(trainers, "Team Magma"),
          filterTrainers(trainers, "Admin")
        ); //Team Aqua/Magma Grunts
        break;
      case 3:
        filteredTrainers = excludeTrainers(trainers, [
          "Leader",
          "Team Aqua",
          "Team Magma",
          "Admin",
          "May",
          "Brendan",
        ]); //Every other Trainer
        break;
      case 4:
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
                  trainer.name.replace("Magma", "M.").replace("Aqua", "A.")}
                {toggleState === 2 &&
                  trainer.name.replace("Magma", "M.").replace("Aqua", "A.")}
                {toggleState === 3 &&
                  trainer.name.replace("Pkmn Trainer 3", "")}
                {toggleState === 4 &&
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

    const handlePokemonClick = (name) => {
      setSearchValue(name.replace(":", ""));
      setDisplayedPage("Pokemon");
    };

    return (
      <div className="teamDataContainer">
        <div className="teamData-header">
          <div className="teamData-trainerName">{selectedTrainer.name}</div>
          <div className="teamData-battleType">
            <div className="battleType-tab" onClick={() => toggleTab(1)}>
              Normal
            </div>
            <div className="battleType-tab" onClick={() => toggleTab(2)}>
              Elite
            </div>
            <div className="battleType-tab" onClick={() => toggleTab(3)}>
              Rematch
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
                            src={require(`../assets/icons/types/${pokemon.type[0]}.png`)}
                            alt={pokemon.type[0]}
                          ></img>
                          {pokemon.type[1] == pokemon.type[0] ? (
                            ""
                          ) : (
                            <img
                              src={require(`../assets/icons/types/${pokemon.type[1]}.png`)}
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
                              src={require(`../assets/icons/sprites/${nameRegex(
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
            Gym/Team Leaders
          </div>
          <div className="trainerTab" onClick={() => toggleTab(2)}>
            Aqua/Magma
          </div>
          <div className="trainerTab" onClick={() => toggleTab(3)}>
            Trainers
          </div>
          <div className="trainerTab" onClick={() => toggleTab(4)}>
            Rival
          </div>
        </div>
        <TrainerList />
      </div>
      <TrainerTeamTable />
    </div>
  );
};

export default TrainerPage;
