import React, { useState, useContext } from "react";

import PokemonDataPanel from "../../components/PokemonDataPanel";
import MovesPanel from "../../components/MovesPanel";

import { DataContext } from "../../data/DataContext";

import "./PokemonPage.scss";

const PokemonPage = () => {
  const { themeColor, setThemeColor } = useContext(DataContext);
  return (
    <div className="dataContainer">
      <PokemonDataPanel setMainTypeColor={setThemeColor} />
      <MovesPanel mainTypeColor={themeColor} />
    </div>
  );
};

export {
  PokemonPage
};
