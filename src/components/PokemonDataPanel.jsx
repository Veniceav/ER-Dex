import React, { useContext, useState } from "react";
import "../css/PokemonDataPanel.css";
import { DataContext } from "../data/DataContext";

const getEvolutions = (evos = [], data) => {
  const arr = [...evos];

  evos.forEach((e) => {
    const nextPokemon = data.species[e.in];
    const nextEvolutions = nextPokemon.evolutions;

    if (nextEvolutions.length > 0)
      arr.push(...getEvolutions(nextEvolutions, data));
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

const EvoLine = ({
  evolutions,
  type1Color,
  nameRegex,
  handlePokemonClick,
  data,
}) => {
  const allEvos = getEvolutions(evolutions, data);

  const allEvoData = allEvos.map((e) => {
    return data.species[e.in];
  });

  return (
    <div className="evoLine">
      <div className="evoHeader">Evolutions</div>
      <div className="evoBody">
        {allEvoData.map((d, index) => {
          const evoRawData = allEvos[index];
          const name = d.name;
          const evoType = data.evoKindT[evoRawData.kd]
            .replace("EVO", "")
            .toLowerCase()
            .replaceAll("_", " ");
          return (
            <div
              className="evolution"
              onClick={() => handlePokemonClick(name)}
              key={index}
            >
              <div
                className="evoRequirement"
                style={{ color: `${type1Color}` }}
              >
                {evoTypeStrings[evoType] || evoType}:{" "}
                {evoRawData.rs
                  .replace(["ITEM_"], "")
                  .toLowerCase()
                  .replace("_", " ")}
              </div>
              <div className="evoTitle">
                <div className="evoImg">
                  <img
                    src={require(`../assets/icons/sprites/${nameRegex(
                      name
                    )}.png`)}
                    alt={name}
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

  const renderStatBar = (stat) => {
    const colors = [
      "redStat",
      "orangeStat",
      "yellowStat",
      "greenStat",
      "darkGreenStat",
      "blueStat",
    ];
    const thresholds = [30, 60, 90, 120, 150, 255];

    const colorIndex = thresholds.findIndex((threshold) => stat <= threshold);
    const className = colors[colorIndex];

    return (
      stat <= 255 && <progress className={className} value={stat} max={255} />
    );
  };

  const statTitles = ["Hp", "Atk", "Def", "Sp. Atk", "Sp. Def", "Speed"];

  return (
    <tbody>
      {baseStats.map((stat, index) => (
        <tr key={index}>
          <th className="statTitle">
            {statTitles[index]}
            {":"}
          </th>
          <td className="statNumValue">{stat}</td>
          <td className="statBar">{renderStatBar(stat)}</td>
        </tr>
      ))}
    </tbody>
  );
};

const Abilities = ({ abilities, data, handleAbilityChange, type1Color }) => {
  const getAllAbilities = () => {
    const allAbilities = data.abilities;
    const ability1 = allAbilities[abilities[0]]?.name;
    const ability2 = allAbilities[abilities[1]]?.name;
    const ability3 = allAbilities[abilities[2]]?.name;
    return [ability1, ability2, ability3];
  };

  const targetedAbilities = getAllAbilities();
  let mappedAbilities = new Set();
  return targetedAbilities.map((ability, index) => {
    if (ability !== "-------" && !mappedAbilities.has(ability)) {
      mappedAbilities.add(ability);
      return (
        <ul
          className="abilityItem"
          style={{
            color: `${type1Color}`,
          }}
          onClick={() => handleAbilityChange(ability)}
          key={index}
        >
          {ability}
        </ul>
      );
    }
  });
};

const Types = ({
  types,
  data,
  setType1Color,
  setType2Color,
  setMainTypeColor,
}) => {
  const getColor = (type) => {
    const colorMap = {
      Fire: "#EE8130",
      Grass: "#7AC74C",
      Dragon: "#6F35FC",
      Poison: "#A33EA1",
      Water: "#6390F0",
      Normal: "#A8A77A",
      Electric: "#F7D02C",
      Flying: "#A98FF3",
      Steel: "#B7B7CE",
      Rock: "#B6A136",
      Psychic: "#F95587",
      Bug: "#A6B91A",
      Fairy: "#D685AD",
      Fighting: "#C22E28",
      Ice: "#96D9D6",
      Ground: "#E2BF65",
      Ghost: "#735797",
      Dark: "#705746",
    };

    return colorMap[type] || "";
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
            alt={type2}
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
    setDisplayedPage,
    handleAbilityChange,
    nameRegex,
    handlePokemonClick,
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
              src={require(`../assets/icons/sprites/${nameRegex(name)}.png`)}
              alt={name}
            ></img>
          )}
        </div>
        <div className="pokeball-bg"></div>
      </div>
      <div className="pokemonAltInfo">
        <div className="pokemonAltInfo-stats">
          <table className="pokemonStats">
            <Stats stats={stats} type1Color={type1Color} />
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
            data={data}
            nameRegex={nameRegex}
            evolutions={evolutions}
            type1Color={type1Color}
            handlePokemonClick={handlePokemonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDataPanel;
