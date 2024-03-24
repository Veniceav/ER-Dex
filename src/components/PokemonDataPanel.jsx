import React, { useContext, useState } from "react";
import "./PokemonDataPanel.css";
import gameData from "../gameDataV1.6.1";
import { DataContext } from "../data/DataContext";

const getEvolutions = (evos = []) => {
  const arr = [...evos];

  evos.forEach((e) => {
    const nextPokemon = gameData.species[e.in];
    const nextEvolutions = nextPokemon.evolutions;

    if (nextEvolutions.length > 0) arr.push(...getEvolutions(nextEvolutions));
  });
  return arr;
};

const evoTypeStrings = {
  EVO_LEVEL: "Level",
  EVO_MEGA_EVOLUTION: "Mega",
  EVO_ITEM: "Item",
  EVO_SPECIFIC_MAPSEC: "Location",
  EVO_MOVE: "",
  EVO_LEVEL_DAY: "Day Time",
  EVO_LEVEL_DUSK: "Dusk Time",
  EVO_LEVEL_NIGHT: "Night Time",
  EVO_MOVE_MEGA_EVOLUTION: "",
};

const EvoLine = ({ evolutions, setSearchValue, type1Color }) => {
  const allEvos = getEvolutions(evolutions);

  const allEvoData = allEvos.map((e) => {
    return gameData.species[e.in];
  });
  // console.log("All Evolutions", allEvoData);

  const handleEvoClick = (name) => {
    setSearchValue(name);
  };

  return (
    <div className="evoLine">
      <div className="evoHeader">Evolutions</div>
      <div className="evoBody">
        {allEvoData.map((d, index) => {
          const evoRawData = allEvos[index];
          const name = d.name;
          const evoType = gameData.evoKindT[evoRawData.kd]
            .replace("EVO", "")
            .toLowerCase()
            .replaceAll("_", " ");
          return (
            <div className="evolution" onClick={() => handleEvoClick(name)}>
              <div
                className="evoRequirement"
                style={{
                  color: `${type1Color}`,
                }}
              >
                {evoTypeStrings[evoType] || evoType}:{" "}
                {evoRawData.rs
                  .replace(["ITEM_"], "")
                  .toLowerCase()
                  .replace("_", " ")}
              </div>
              <div className="evoTitle">
                {/* <div className="evoName">{name}</div> */}
                <div className="evoImg">
                  <img
                    src={require(`../assets/icons/sprites/${name
                      .toUpperCase()
                      .replaceAll(" ", "_")
                      .replace("-", "_")}.png`)}
                  ></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Stats = ({ stats, type1Color }) => {
  const baseStats = stats;

  return baseStats.map((e, index) => {
    const statTitles = ["Hp", "Atk", "Def", "Sp. Atk", "Sp. Def", "Speed"];
    return (
      <tr>
        <th className="statTitle">
          {statTitles[index]}
          {":"}
        </th>
        <td className="statNumValue">{baseStats[index]}</td>
        <td className="statBar">
          {baseStats[index] <= 29 ? (
            <progress
              style={{
                background: `${type1Color}`,
              }}
              className="redStat"
              value={baseStats[index]}
              max={255}
            />
          ) : (
            ""
          )}
          {baseStats[index] <= 59 && baseStats[index] >= 30 ? (
            <progress
              className="orangeStat"
              value={baseStats[index]}
              max={255}
            />
          ) : (
            ""
          )}
          {baseStats[index] <= 89 && baseStats[index] >= 60 ? (
            <progress
              className="yellowStat"
              value={baseStats[index]}
              max={255}
            />
          ) : (
            ""
          )}
          {baseStats[index] <= 119 && baseStats[index] >= 90 ? (
            <progress
              className="greenStat"
              value={baseStats[index]}
              max={255}
            />
          ) : (
            ""
          )}
          {baseStats[index] <= 149 && baseStats[index] >= 120 ? (
            <progress
              className="darkGreenStat"
              value={baseStats[index]}
              max={255}
            />
          ) : (
            ""
          )}
          {baseStats[index] <= 255 && baseStats[index] >= 150 ? (
            <progress className="blueStat" value={baseStats[index]} max={255} />
          ) : (
            ""
          )}
        </td>
      </tr>
    );
  });
};

const Abilities = ({ abilities, data, handleAbilityChange, type1Color }) => {
  const getAllAbilities = () => {
    const allAbilities = data.abilities;
    const ability1 = allAbilities[abilities[0]].name;
    const ability2 = allAbilities[abilities[1]].name;
    const ability3 = allAbilities[abilities[2]].name;
    return [ability1, ability2, ability3];
  };
  const targetedAbilities = getAllAbilities(abilities);
  return targetedAbilities.map((e, index) => {
    const ability = targetedAbilities[index];
    return (
      <ul
        className="abilityItem"
        style={{
          color: `${type1Color}`,
        }}
        onClick={() => handleAbilityChange(ability)}
      >
        {ability}
      </ul>
    );
  });
};

const Types = ({
  types,
  data,
  setType1Color,
  setType2Color,
  type1Color,
  type2Color,
  setMainTypeColor,
}) => {
  const colors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const getColor = (type1, type2) => {
    if (type1 == "Fire") return colors.fire;
    if (type1 == "Grass") return colors.grass;
    if (type1 == "Dragon") return colors.dragon;
    if (type1 == "Poison") return colors.poison;
    if (type1 == "Water") return colors.water;
    if (type1 == "Normal") return colors.normal;
    if (type1 == "Electric") return colors.electric;
    if (type1 == "Flying") return colors.flying;
    if (type1 == "Steel") return colors.steel;
    if (type1 == "Rock") return colors.rock;
    if (type1 == "Psychic") return colors.psychic;
    if (type1 == "Bug") return colors.bug;
    if (type1 == "Fairy") return colors.fairy;
    if (type1 == "Fighting") return colors.fighting;
    if (type1 == "Ice") return colors.ice;
    if (type1 == "Ground") return colors.ground;
    if (type1 == "Ghost") return colors.ghost;
    if (type1 == "Dark") return colors.dark;
    return "";
  };

  const getTargetType = (types) => {
    const allTypes = data.typeT;
    const typeTarget1 = allTypes[types[0]];
    const typeTarget2 = allTypes[types[1]];
    setType1Color(getColor(typeTarget1));
    setType2Color(getColor(typeTarget2));
    setMainTypeColor(getColor(typeTarget1));
    return [typeTarget1, typeTarget2];
  };

  const [type1, type2] = getTargetType(types);

  return (
    <div className="typesContainer" stats={types}>
      <div className="typeCard">
        {type1 === undefined ? (
          ""
        ) : (
          <img
            src={require(`../assets/icons/types/${type1}.png`)}
            alt={type1}
          ></img>
        )}
      </div>
      <div className="typeCard">
        {type2 === undefined || type2 === type1 ? (
          ""
        ) : (
          <img
            src={require(`../assets/icons/types/${type2}.png`)}
            alt={type1}
          ></img>
        )}
      </div>
    </div>
  );
};

const PokemonDataPanel = ({ setMainTypeColor }) => {
  const [type1Color, setType1Color] = useState("");
  const [type2Color, setType2Color] = useState("");
  const {
    name,
    stats,
    types,
    evolutions,
    data,
    abilities,
    innates,
    imageName,
    setSearchValue,
    setDisplayedPage,
    handleAbilityChange,
  } = useContext(DataContext);

  return (
    <div className="pokemonDataContainer">
      <div className="pokemonData-DisplayCard">
        <div className="displayCard-Header">
          <div className="pokemonName">{name.replace("_", "")}</div>
          <div className="pokemonTypes">
            <Types
              types={types}
              data={data}
              setMainTypeColor={setMainTypeColor}
              setType1Color={setType1Color}
              setType2Color={setType2Color}
              type1Color={type1Color}
              type2Color={type2Color}
            />
          </div>
        </div>
        <div className="pokemonIcon">
          {name === "" ? (
            <></>
          ) : (
            <img
              src={require(`../assets/icons/sprites/${imageName
                .replace(" ", "_")
                .replaceAll("-", "_")}.png`)}
              alt={name}
            ></img>
          )}
        </div>
        <div className="pokeball-bg"></div>
      </div>
      <div className="pokemonAltInfo">
        <div className="pokemonAltInfo-stats">
          {" "}
          <table className="pokemonStats">
            <tbody>
              <Stats stats={stats} type1Color={type1Color} />
            </tbody>
          </table>
        </div>
        <div className="pokemonAltInfo-data">
          <div className="pokemonAltInfo-abilities">
            <div className="abilitySummary">
              <div className="abilityCatagories">
                <div className="abilityList">
                  <th className="abilityCatagory">Abilities:</th>
                  <Abilities
                    abilities={abilities}
                    data={data}
                    handleAbilityChange={handleAbilityChange}
                    type1Color={type1Color}
                  />
                </div>
                <div className="abilityList">
                  <div className="abilityCatagory">Innates:</div>
                  <Abilities
                    abilities={innates}
                    data={data}
                    setDisplayedPage={setDisplayedPage}
                    handleAbilityChange={handleAbilityChange}
                    type1Color={type1Color}
                  />
                </div>
              </div>
            </div>
          </div>
          <EvoLine
            evolutions={evolutions}
            type1Color={type1Color}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDataPanel;
