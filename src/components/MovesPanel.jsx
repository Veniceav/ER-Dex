import React, { useContext, useEffect, useState } from "react";
import "./MovesPanel.css";
import { DataContext } from "../data/DataContext";

const LevelUpMoves = ({ data, levelUpMoves }) => {
  const [levelUpMoveList, setLevelUpMoveList] = useState([]);

  const getMovesIndex = ({ levelUpMoves }) => {
    const targetIndex = levelUpMoves.map((e) => {
      const indexVal = e.id;
      return indexVal;
    });
    return targetIndex;
  };

  const getMovesLvl = ({ levelUpMoves }) => {
    const targetMoves = levelUpMoves.map((e) => {
      const levelValue = e.lv;
      return levelValue;
    });
    return targetMoves;
  };

  const filteredMoves = ({ data, levelUpMoves }) => {
    const allMoves = data.moves;
    const movesIndexArr = getMovesIndex({ levelUpMoves });
    const mappedMoves = movesIndexArr.map((i) => {
      return allMoves[i];
    });
    return mappedMoves;
  };

  useEffect(() => {
    if (levelUpMoves.length === 0) {
      return;
    } else {
      setLevelUpMoveList(filteredMoves({ data, levelUpMoves }));
    }
  }, [levelUpMoves]);

  return (
    <div className="moveTableContainer">
      <table className="tableContent">
        <tr className="tableRow">
          <th className="nameCol">Name</th>
          <th className="levelCol">Level</th>
          <th className="typeCol">Type</th>
          <th className="splitCol">Split</th>
          <th className="powerCol">Power</th>
          <th className="accuracyCol">Acc</th>
          <th className="ppCol">PP</th>
          <th className="descriptionCol">Description</th>
        </tr>

        {levelUpMoveList.map((val, index) => {
          const moveSplit = data.splitT[val.split];
          const moveType = data.typeT[val.types];
          const getLevels = getMovesLvl({ levelUpMoves });
          const levelUpLearned = getLevels[index];

          return (
            <tr key={index} className="tableRow">
              <th className="nameCol">{val.name}</th>
              <td className="levelCol">
                {levelUpLearned == 0 ? "EV" : levelUpLearned}
              </td>
              <td className="typeCol">{moveType}</td>
              <td className="splitCol">
                {moveSplit === "PHYSICAL" ? (
                  <img src={require(`../assets/icons/${moveSplit}.png`)} />
                ) : (
                  <></>
                )}
                {moveSplit === "SPECIAL" ? (
                  <img src={require(`../assets/icons/${moveSplit}.png`)} />
                ) : (
                  <></>
                )}
                {moveSplit === "STATUS" ? (
                  <img src={require(`../assets/icons/${moveSplit}.png`)} />
                ) : (
                  <></>
                )}
              </td>
              <td className="powerCol">{val.pwr}</td>
              <td className="accuracyCol">{val.acc}</td>
              <td className="ppCol">{val.pp}</td>
              <td className="descriptionCol">{val.desc}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const AltMoves = ({ data, moves }) => {
  const [movesArr, setMovesArr] = useState([]);

  useEffect(() => {
    if (moves.length === 0) {
      return;
    } else {
      setMovesArr(filteredMoves({ data, moves }));
    }
  }, [moves]);

  const filteredMoves = ({ data, moves }) => {
    const allMoves = data.moves;
    const mappedMoves = moves.map((i) => {
      return allMoves[i];
    });
    return mappedMoves;
  };
  return (
    <div className="moveTableContainer">
      <table className="tableContent">
        <tr className="tableRow">
          <th className="nameCol">Name</th>

          <th className="typeCol">Type</th>
          <th className="splitCol">split</th>
          <th className="powerCol">power</th>
          <th className="accuracyCol">Acc</th>
          <th className="ppCol">PP</th>
          <th className="descriptionCol">Description</th>
        </tr>

        {movesArr.map((val, index) => {
          const moveSplit = data.splitT[val.split];
          const moveType = data.typeT[val.types];

          return (
            <tr key={index} className="tableRow">
              <th className="nameCol">{val.name}</th>
              <td className="typeCol">{moveType}</td>
              <td className="splitCol">
                {moveSplit === "PHYSICAL" ? (
                  <img src={require(`../assets/icons/${moveSplit}.png`)} />
                ) : (
                  <></>
                )}
                {moveSplit === "SPECIAL" ? (
                  <img src={require(`../assets/icons/${moveSplit}.png`)} />
                ) : (
                  <></>
                )}
                {moveSplit === "STATUS" ? (
                  <img src={require(`../assets/icons/${moveSplit}.png`)} />
                ) : (
                  <></>
                )}
              </td>
              <td className="powerCol">{val.pwr}</td>
              <td className="accuracyCol">{val.acc}</td>
              <td className="ppCol">{val.pp}</td>
              <td className="descriptionCol">{val.desc}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const MovesPanel = ({ mainTypeColor }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { data, levelUpMoves, tmHmMoves, tutorMoves, eggMoves } =
    useContext(DataContext);

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
      {toggleState === 1 ? (
        <LevelUpMoves data={data} levelUpMoves={levelUpMoves} />
      ) : (
        ""
      )}
      {toggleState === 2 ? <AltMoves data={data} moves={tmHmMoves} /> : ""}
      {toggleState === 3 ? <AltMoves data={data} moves={tutorMoves} /> : ""}
      {toggleState === 4 ? <AltMoves data={data} moves={eggMoves} /> : ""}
    </div>
  );
};

export default MovesPanel;
