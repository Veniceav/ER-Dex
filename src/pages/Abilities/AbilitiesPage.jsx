import React, { useContext } from "react";

import { DataContext } from "../../data/DataContext";

import "./AbilitiesPage.scss";

const AbilityList = ({ abilityNames, handleTitleChange }) => {
  const abilityListSorted = abilityNames.toSorted();
  return (
    <div className="abilityListContainer">
      <ol>
        {abilityListSorted.map((name, index) => (
          <li key={index} onClick={handleTitleChange} value={name}>
            {name.replace("-------", "")}
          </li>
        ))}
      </ol>
    </div>
  );
};
const AbilityData = ({
  abilityTitle,
  abilityDescription,
  filteredPokemon,
  abilityNames,
  handleAbilityChange,
  nameRegex,
  handlePokemonClick,
}) => {
  const renderAbilityItem = (ability) => {
    return (
      <div className="abilityItem" onClick={() => handleAbilityChange(ability)}>
        {ability}
      </div>
    );
  };

  const renderPokemonRow = (pokemon, index) => {
    const { name, stats } = pokemon;
    const ability = stats.abis.map(
      (abilityIndex) => abilityNames[abilityIndex]
    );
    const innate = stats.inns.map((innateIndex) => abilityNames[innateIndex]);
    let mappedAbilities = new Set();
    return (
      <tr key={index}>
        <td className="icons" onClick={() => handlePokemonClick(name)}>
          <img
            src={require(`../../assets/icons/sprites/${nameRegex(name)}.png`)}
            alt={name}
          />
        </td>
        <td
          className="pokemonName"
          key={index}
          onClick={() => handlePokemonClick(name)}
        >
          {name}
        </td>
        <td className="pokemonAbilities">
          {ability.map((abilityItem, index) => {
            if (
              abilityItem !== "-------" &&
              !mappedAbilities.has(abilityItem)
            ) {
              mappedAbilities.add(abilityItem);
              return renderAbilityItem(abilityItem);
            }
            return null;
          })}
        </td>
        <td className="pokemonInnates">
          {innate.map((abilityItem) => {
            if (abilityItem !== "-------") {
              return renderAbilityItem(abilityItem);
            }
          })}
        </td>
      </tr>
    );
  };

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
              <th className="pokemonNameHeader">Name</th>
              <th className="abilitiesHeader">Abilities</th>
              <th className="innatesHeader">Innates</th>
            </tr>
            {filteredPokemon.map(renderPokemonRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AbilitiesPage = () => {
  const {
    setSearchValue,
    handleAbilityChange,
    abilityNames,
    handleTitleChange,
    filteredPokemon,
    abilityTitle,
    abilityDescription,
    nameRegex,
    handlePokemonClick,
  } = useContext(DataContext);

  return (
    <div className="dataContainer">
      <AbilityList
        abilityNames={abilityNames}
        handleTitleChange={handleTitleChange}
      />
      <AbilityData
        nameRegex={nameRegex}
        abilityNames={abilityNames}
        abilityTitle={abilityTitle}
        abilityDescription={abilityDescription}
        setSearchValue={setSearchValue}
        handleAbilityChange={handleAbilityChange}
        filteredPokemon={filteredPokemon}
        handlePokemonClick={handlePokemonClick}
      />
    </div>
  );
};

export {
  AbilitiesPage
};
