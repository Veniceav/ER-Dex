import React, { useContext } from "react";
import "./MovePage.css";
import { DataContext } from "../data/DataContext";

const MoveList = ({ moveNames, handleMoveChange }) => {
  const moveListSorted = moveNames.toSorted();
  return (
    <div className="moveListContainer">
      <ol>
        {moveListSorted.map((name, index) => {
          if (name !== "-")
            return (
              <li
                key={index}
                onClick={() => handleMoveChange(name)}
                value={name}
                id={index}
              >
                {name}
              </li>
            );
        })}
      </ol>
    </div>
  );
};
const MoveData = ({
  moveTitle,
  moveDescription,
  filteredPokemon,
  setSearchValue,
  setDisplayedPage,
  nameRegex,
}) => {
  const handlePokemonClick = (name) => {
    setSearchValue(name);
    setDisplayedPage("Pokemon");
  };

  const renderPokemonRow = (pokemon, index) => {
    const { name, moves } = pokemon;
    const moveLearnType = pokemon.moveLearnType.join(", ");

    return (
      <tr key={index}>
        <td className="icons" onClick={() => handlePokemonClick(name)}>
          <img
            src={require(`../assets/icons/sprites/${nameRegex(name)}.png`)}
            alt={name}
          />
        </td>
        <td className="pokemonName" onClick={() => handlePokemonClick(name)}>
          {name}
        </td>
        <td className="moveLearnType">{moveLearnType}</td>
      </tr>
    );
  };

  return (
    <div className="moveDataContainer">
      <div className="moveData">
        <div className="moveName">{moveTitle}</div>
        <div className="moveDescription">{moveDescription}</div>
      </div>
      <div className="sharedWithContainer">
        <table className="sharedWithTable">
          <tbody>
            <tr>
              <th className="icons"></th>
              <th className="pokemonNameHeader">Name</th>
              <th className="moveLearnTypeHeader">Learn Type</th>
            </tr>
            {filteredPokemon.map(renderPokemonRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MovesPage = () => {
  const {
    setSearchValue,
    setDisplayedPage,
    handleMoveChange,
    data, // Include data in the props
    filteredPokemonMoves,
    moveNames,
    moveTitle,
    moveDescription,
    nameRegex,
  } = useContext(DataContext);

  return (
    <div className="dataContainer">
      <MoveList moveNames={moveNames} handleMoveChange={handleMoveChange} />
      <MoveData
        moveTitle={moveTitle}
        moveDescription={moveDescription}
        setSearchValue={setSearchValue}
        setDisplayedPage={setDisplayedPage}
        filteredPokemon={filteredPokemonMoves}
        nameRegex={nameRegex}
      />
    </div>
  );
};

export default MovesPage;
