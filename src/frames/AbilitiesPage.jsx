import React, { useContext, useState } from "react";
import "./AbilitiesPage.css";
import { DataContext } from "../data/DataContext";

const AbilityList = ({ abilityNames, handleTitleChange }) => {
  return (
    <div className="abilityListContainer">
      <ol>
        {abilityNames.map((names, index) => {
          return (
            <li
              onClick={handleTitleChange}
              id={index}
              value={names}
              key={index}
            >
              {names.replace("-------", "")}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const AbilityData = ({
  abilityTitle,
  abilityDescription,
  filteredPokemon,
  abilityNames,
  setSearchValue,
  setDisplayedPage,
  handleAbilityChange,
}) => {
  return (
    <div className="abilityDataContainer">
      <div className="abilityData">
        <div className="abilityName">{abilityTitle}</div>
        <div className="abilityDescription">{abilityDescription}</div>
      </div>
      <div className="sharedWithContainer">
        <table className="sharedWithTable">
          <tbody>
            <tr>
              <th className="icons"></th>
              <th className="pokemonName">Name</th>
              {/* <th className="pokemonTypes">Type(s)</th> */}
              <th className="pokemonAbilities">Abilities</th>
              <th className="pokemonInnates">Innates</th>
            </tr>
            {filteredPokemon.map((pokemon) => {
              const name = pokemon.name;
              const abi1 = abilityNames[pokemon.stats.abis[0]];
              const abi2 = abilityNames[pokemon.stats.abis[1]];
              const abi3 = abilityNames[pokemon.stats.abis[2]];
              const inn1 = abilityNames[pokemon.stats.inns[0]];
              const inn2 = abilityNames[pokemon.stats.inns[1]];
              const inn3 = abilityNames[pokemon.stats.inns[2]];

              const handlePokemonClick = ({ name }) => {
                setSearchValue(name.replace(":", ""));
                setDisplayedPage("Pokemon");
              };

              return (
                <tr>
                  <td
                    className="icons"
                    onClick={() => handlePokemonClick({ name })}
                  >
                    <img
                      src={require(`../assets/icons/sprites/${name
                        .toUpperCase()
                        .replaceAll(" ", "_")
                        .replace("-", "_")}.png`)}
                    ></img>
                  </td>
                  <td
                    className="pokemonName"
                    onClick={() => handlePokemonClick({ name })}
                  >
                    {name}
                  </td>
                  {/* <td className="pokemonTypes"></td> */}
                  <td className="pokemonAbilities">
                    <div
                      className="abi1 abilityItem"
                      onClick={() => handleAbilityChange(abi1)}
                    >
                      {abi1.replace("-------", "")}
                    </div>
                    /
                    <div
                      className="abi2 abilityItem"
                      onClick={() => handleAbilityChange(abi2)}
                    >
                      {abi2.replace("-------", "")}
                    </div>
                    /
                    <div
                      className="abi3 abilityItem"
                      onClick={() => handleAbilityChange(abi3)}
                    >
                      {abi3.replace("-------", "")}
                    </div>
                  </td>
                  <td className="pokemonInnates">
                    <div
                      className="abi1 abilityItem"
                      onClick={() => handleAbilityChange(inn1)}
                    >
                      {inn1.replace("-------", "")}
                    </div>
                    /
                    <div
                      className="abi2 abilityItem"
                      onClick={() => handleAbilityChange(inn2)}
                    >
                      {inn2.replace("-------", "")}
                    </div>
                    /
                    <div
                      className="abi3 abilityItem"
                      onClick={() => handleAbilityChange(inn3)}
                    >
                      {inn3.replace("-------", "")}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AbilitiesPage = () => {
  const {
    setSearchValue,
    setDisplayedPage,
    handleAbilityChange,
    abilityNames,
    handleTitleChange,
    filteredPokemon,
    abilityTitle,
    abilityDescription,
  } = useContext(DataContext);

  return (
    <div className="dataContainer">
      <AbilityList
        abilityNames={abilityNames}
        handleTitleChange={handleTitleChange}
        filteredPokemon={filteredPokemon}
      />
      <AbilityData
        abilityNames={abilityNames}
        abilityTitle={abilityTitle}
        abilityDescription={abilityDescription}
        setDisplayedPage={setDisplayedPage}
        setSearchValue={setSearchValue}
        handleAbilityChange={handleAbilityChange}
        filteredPokemon={filteredPokemon}
      />
    </div>
  );
};

export default AbilitiesPage;
