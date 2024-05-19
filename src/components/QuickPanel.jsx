import { Link } from "react-router-dom"

import "../css/QuickPanel.css";

function QuickPanel() {
  return (
    <div className="panelContainer">
      <div className="tabContainer">
        <div className="tabList">
          <Link
            className="pokemon tab"
            to="pokemon"
          >
            Pokemon
          </Link>
          <Link
            className="Abilities tab"
            to="abilities"
          >
            Abilities
          </Link>
          <Link className="Moves tab" to="moves">
            Moves
          </Link>
          <Link
            className="trainers tab"
            to="trainers"
          >
            Trainers
          </Link>
          <Link
            className="teamBuilder tab"
            to="team-builder"
          >
            Team Builder
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuickPanel;
