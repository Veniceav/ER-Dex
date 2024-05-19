import React, { useContext } from "react";

import { DataContext } from "../../data/DataContext";

import "./MovesPage.scss";
import { useParams, Link } from "react-router-dom";
import { useAllPokemon, useMove } from "../../libs/hooks";
import { nameRegex } from "../../libs/utils";

const getMoveLearnType = (pokemon, moveIndex) => {
  const { eggMoves, levelUpMoves, TMHMMoves, tutor } = pokemon

  const moveLearnType = [];

  if (levelUpMoves.some((move) => move.id === moveIndex)) {
    moveLearnType.push("Level Up");
  }
  if (TMHMMoves.includes(moveIndex)) {
    moveLearnType.push("TM/HM");
  }
  if (tutor.includes(moveIndex)) {
    moveLearnType.push("Tutor");
  }
  if (eggMoves.includes(moveIndex)) {
    moveLearnType.push("Egg");
  }

  return moveLearnType
}

const MoveList = ({ moveNames, handleMoveChange }) => {
  const moveListSorted = moveNames.toSorted();
  return (
    <div className="moveListContainer">
      <ol>
        {moveListSorted.map((name, index) => {
          if (name !== "-")
            return (
              <Link to={`/moves/${name}`}>
                <li
                  key={index}
                  onClick={() => handleMoveChange(name)}
                  value={name}
                  id={index}
                >
                  {name}
                </li>
              </Link>
            );
        })}
      </ol>
    </div>
  );
};

const MoveData = ({ handlePokemonClick }) => {
  const { moveName } = useParams()

  const [moveData, moveIndex] = useMove(moveName)
  const [filteredPokemon] = useAllPokemon({ move: moveName })

  if (!moveData) return null
  return (
    <div className="moveDataContainer">
      <div className="moveData">
        <div className="moveName">{moveName}</div>
        <div className="moveDescription">{moveData.desc}</div>
      </div>
      <div className="sharedWithContainer">
        <table className="sharedWithTable">
          <tbody>
            <tr>
              <th className="icons"></th>
              <th className="pokemonNameHeader">Name</th>
              <th className="moveLearnTypeHeader">Learn Type</th>
            </tr>
            {filteredPokemon.map((pokemon, index) => {
              const { name } = pokemon;

              return (
                <tr key={index}>
                  <td className="icons" onClick={() => handlePokemonClick(name)}>
                    <img
                      src={require(`../../assets/icons/sprites/${nameRegex(name)}.png`)}
                      alt={name}
                    />
                  </td>
                  <td className="pokemonName" onClick={() => handlePokemonClick(name)}>
                    {name}
                  </td>
                  <td className="moveLearnType">
                    {getMoveLearnType(pokemon, moveIndex).join(", ")}
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

const MovesPage = () => {
  const {
    setSearchValue,
    setDisplayedPage,
    handleMoveChange,
    filteredPokemonMoves,
    moveNames,
    moveDescription,
    handlePokemonClick,
  } = useContext(DataContext);

  return (
    <div className="dataContainer">
      <MoveList moveNames={moveNames} handleMoveChange={handleMoveChange} />
      <MoveData
        moveDescription={moveDescription}
        setSearchValue={setSearchValue}
        setDisplayedPage={setDisplayedPage}
        filteredPokemon={filteredPokemonMoves}
        handlePokemonClick={handlePokemonClick}
      />
    </div>
  );
};

export {
  MovesPage
};
