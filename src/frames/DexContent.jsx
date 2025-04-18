import React, { useContext } from "react";
import "../css/DexContent.css";

import {
  PokemonPage,
  MovesPage,
  AbilitiesPage,
  TrainerPage,
  TeamBuilder
} from "../pages";

import { DataContext } from "../data/DataContext";

const MainPage = () => {
  const { displayedPage } = useContext(DataContext);

  return (
    <>
      {displayedPage === "Pokemon" && <PokemonPage /> }
      {displayedPage === "Moves" && <MovesPage />}
      {displayedPage === "Abilities" && <AbilitiesPage />}
      {displayedPage === "Trainers" && <TrainerPage />}
      {displayedPage === "TBuilder" && <TeamBuilder />}
    </>
  );
};

export default MainPage;
