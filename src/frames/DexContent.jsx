import React, { useState, useContext } from "react";
import "./DexContent.css";
import PokemonData from "./PokemonData";
import AbilitiesPage from "./AbilitiesPage";
import { DataContext } from "../data/DataContext";

const MainPage = ({ mainTypeColor, setMainTypeColor }) => {
  const { displayedPage } = useContext(DataContext);

  return (
    <div
      mainTypeColor={mainTypeColor}
      setMainTypeColor={setMainTypeColor}
      className="dexContent"
    >
      {displayedPage === "Pokemon" ? (
        <PokemonData
          mainTypeColor={mainTypeColor}
          setMainTypeColor={setMainTypeColor}
        />
      ) : (
        ""
      )}
      {displayedPage === "Abilities" ? <AbilitiesPage /> : ""}
    </div>
  );
};

export default MainPage;
