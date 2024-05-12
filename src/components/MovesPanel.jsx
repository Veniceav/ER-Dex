import React, { useContext, useState, useMemo } from "react";
import "../css/MovesPanel.css";
import { DataContext } from "../data/DataContext";

const MovesPanel = ({ mainTypeColor }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const {
    data,
    levelUpMoves,
    tmHmMoves,
    tutorMoves,
    eggMoves,
    handleMoveChange,
  } = useContext(DataContext);

  const movesArr = useMemo(() => {
    const getMovesData = (moves, moveType) => {
      if (moves.length === 0) return [];

      let movesArr = [];

      if (moveType === "levelUpMoves") {
        movesArr = moves.map(({ id }) => data.moves[id]);
      } else {
        movesArr = moves.map((moveId) => {
          if (moveId !== "-") return data.moves[moveId];
        });
      }

      return movesArr;
    };
    switch (toggleState) {
      case 1:
        return getMovesData(levelUpMoves, "levelUpMoves");
      case 2:
        return getMovesData(tmHmMoves, "tmHmMoves");
      case 3:
        return getMovesData(tutorMoves, "tutorMoves");
      case 4:
        return getMovesData(eggMoves, "eggMoves");
      default:
        return [];
    }
  }, [toggleState, levelUpMoves, tmHmMoves, tutorMoves, eggMoves, data.moves]);

  return (
    <div className="movesContainer">
      <div
        className="movesHeader"
        style={{
          backgroundColor: `${mainTypeColor}`,
          background: `linear-gradient(0deg, rgba(24 , 24, 24, 1) 10% , ${mainTypeColor} 190%, ${mainTypeColor} 100%`,
        }}
      >
        <div className="moveSetTitle">Moves</div>
        <div className="learnType">
          <div className="moveTab" onClick={() => toggleTab(1)}>
            Level Up
          </div>
          <div className="moveTab" onClick={() => toggleTab(2)}>
            TM/HM
          </div>
          <div className="moveTab" onClick={() => toggleTab(3)}>
            Tutor
          </div>
          <div className="moveTab" onClick={() => toggleTab(4)}>
            Egg Moves
          </div>
        </div>
      </div>
      <div className="moveTableContainer">
        <table className="tableContent">
          <thead>
            <tr className="tableRow">
              <th className="nameCol">Name</th>
              {toggleState === 1 && <th className="levelCol">Level</th>}
              <th className="typeCol">Type</th>
              <th className="splitCol">Split</th>
              <th className="powerCol">Power</th>
              <th className="accuracyCol">Acc</th>
              <th className="ppCol">PP</th>
              <th className="descriptionCol">Description</th>
            </tr>
          </thead>
          <tbody>
            {movesArr.map((val, index) => {
              const moveSplit = data.splitT[val.split];
              const moveType = data.typeT[val.types];
              const levelUpLearned =
                toggleState === 1 ? levelUpMoves[index]?.lv || "EV" : "";

              return (
                <tr key={index} className="tableRow">
                  <td
                    className="nameCol"
                    onClick={() => handleMoveChange(val.name)}
                  >
                    {val.name}
                  </td>
                  {toggleState === 1 && (
                    <td className="levelCol">{levelUpLearned}</td>
                  )}
                  <td className="typeCol">{moveType}</td>
                  <td className="splitCol">
                    {["PHYSICAL", "SPECIAL", "STATUS"].includes(moveSplit) && (
                      <img
                        src={require(`../assets/icons/${moveSplit}.png`)}
                        alt={moveSplit}
                      />
                    )}
                  </td>
                  <td className="powerCol">{val.pwr}</td>
                  <td className="accuracyCol">{val.acc}</td>
                  <td className="ppCol">{val.pp}</td>
                  <td className="descriptionCol">{val.desc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovesPanel;
