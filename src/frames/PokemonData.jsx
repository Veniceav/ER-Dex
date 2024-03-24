import React, { useState } from "react";
import "./PokemonData.css";
import PokemonDataPanel from "../components/PokemonDataPanel";
import MovesPanel from "../components/MovesPanel";

const PokemonData = ({ mainTypeColor, setMainTypeColor }) => {
  return (
    <div className="dataContainer">
      <PokemonDataPanel setMainTypeColor={setMainTypeColor} />
      <MovesPanel mainTypeColor={mainTypeColor} />
    </div>
  );
};

export default PokemonData;
