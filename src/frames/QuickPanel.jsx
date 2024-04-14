import React, { useContext } from "react";
import "./QuickPanel.css";
import { DataContext } from "../data/DataContext";

const RosterSlot = (props) => {
  return <div className="rosterSlot">{props.children}</div>;
};

function QuickPanel({ mainTypeColor }) {
  const { setDisplayedPage } = useContext(DataContext);
  // const currentRoster = [
  //   {
  //     species: "",
  //     icon: "",
  //   },
  //   {
  //     species: "",
  //     icon: "",
  //   },
  //   {
  //     species: "",
  //     icon: "",
  //   },
  //   {
  //     species: "",
  //     icon: "",
  //   },
  //   {
  //     species: "",
  //     icon: "",
  //   },
  //   {
  //     species: "",
  //     icon: "",
  //   },
  // ];

  return (
    <div className="panelContainer">
      <div className="tabContainer">
        <div className="tabList">
          <div
            className="pokemon tab"
            onClick={() => setDisplayedPage("Pokemon")}
          >
            Pokemon
          </div>
          <div
            className="Abilities tab"
            onClick={() => setDisplayedPage("Abilities")}
          >
            Abilities
          </div>
          <div className="Moves tab" onClick={() => setDisplayedPage("Moves")}>
            Moves
          </div>
          {/* will include both boss and route trainers */}
          <div
            className="routeTrainers tab"
            onClick={() => setDisplayedPage("Trainers")}
          >
            Trainers
          </div>
          <div className="damageCalc tab">Damage Calc</div>
        </div>
      </div>
      {/* <div className="teamBuilderContainer">
        <div className="header">Team Builder</div>
        <div className="rosterIcons">
          {currentRoster.map((slot, index) => {
            return <RosterSlot key={index}>{slot.icon}</RosterSlot>;
          })}
        </div>
      </div> */}
    </div>
  );
}

export default QuickPanel;
