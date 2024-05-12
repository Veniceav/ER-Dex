import React, { useState, useContext } from "react";
import "../css/DexContent.css";
import PokemonData from "./PokemonData";
import AbilitiesPage from "./AbilitiesPage";
import MovesPage from "./MovePage";
import TrainerPage from "./TrainerPage";
import TeamBuilder from "./TeamBuilder";
import { DataContext } from "../data/DataContext";

const MainPage = ({ mainTypeColor, setMainTypeColor }) => {
  const { displayedPage } = useContext(DataContext);

  return (
    <div
      mainTypeColor={mainTypeColor}
      setMainTypeColor={setMainTypeColor}
      className="dexContent"
    >
      {displayedPage === "Pokemon" && (
        <PokemonData
          mainTypeColor={mainTypeColor}
          setMainTypeColor={setMainTypeColor}
        />
      )}
      {displayedPage === "Moves" && <MovesPage />}
      {displayedPage === "Abilities" && <AbilitiesPage />}
      {displayedPage === "Trainers" && <TrainerPage />}
      {displayedPage === "TBuilder" && <TeamBuilder />}
    </div>
  );
};

export default MainPage;
