import React, { useState } from "react";
import QuickPanel from "./frames/QuickPanel";
import DexContent from "./frames/DexContent";
import "./DexPage.css";
import SearchBar from "./components/SearchBar";
import PokemonDataProvider from "./data/PokemonDataProvider";

const DexPage = () => {
  const [mainTypeColor, setMainTypeColor] = useState("");
  return (
    <PokemonDataProvider>
      <div className="page">
        <SearchBar />
        <div className="activityContainer">
          <QuickPanel mainTypeColor={mainTypeColor} />
          <DexContent
            mainTypeColor={mainTypeColor}
            setMainTypeColor={setMainTypeColor}
          />
        </div>
      </div>
    </PokemonDataProvider>
  );
};

export default DexPage;
