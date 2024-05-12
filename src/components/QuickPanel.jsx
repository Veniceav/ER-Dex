import React, { useContext } from "react";
import "../css/QuickPanel.css";
import { DataContext } from "../data/DataContext";

const RosterSlot = (props) => {
  return <div className="rosterSlot">{props.children}</div>;
};

function QuickPanel({ mainTypeColor }) {
  const { setDisplayedPage } = useContext(DataContext);
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
          <div
            className="trainers tab"
            onClick={() => setDisplayedPage("Trainers")}
          >
            Trainers
          </div>
          <div
            className="teamBuilder tab"
            onClick={() => setDisplayedPage("TBuilder")}
          >
            Team Builder
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickPanel;
