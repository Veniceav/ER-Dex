import React, { useState } from "react";
import QuickPanel from "./components/QuickPanel";
import DexContent from "./frames/DexContent";
import "./DexPage.css";
import SearchBar from "./components/SearchBar";
import PokemonDataProvider from "./data/PokemonDataProvider";

const DexPage = () => {
  const [maintypecolor, setmaintypecolor] = useState(null);
  return (
    <PokemonDataProvider>
      <div className="page">
        <SearchBar />
        <div className="activityContainer">
          <QuickPanel mainTypeColor={maintypecolor} />
          <DexContent
            mainTypeColor={maintypecolor}
            setMainTypeColor={setmaintypecolor}
          />
        </div>
      </div>
    </PokemonDataProvider>
  );
};

export default DexPage;
