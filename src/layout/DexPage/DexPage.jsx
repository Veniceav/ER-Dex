import React, { useState } from "react";

import QuickPanel from "../../components/QuickPanel";
import DexContent from "../../frames/DexContent";

import SearchBar from "../../components/SearchBar";
import PokemonDataProvider from "../../data/PokemonDataProvider";

import "./DexPage.scss";

const Page = ({ children }) => {
  return (
    <div className="page">
      <SearchBar />
      <div className="activityContainer">
        <div
          className="dexContent"
          style={{ width: '100%' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const DexPage = ({ children }) => {
  return (
    <PokemonDataProvider>
      <Page>
        <QuickPanel />
        {children}
      </Page>
    </PokemonDataProvider>
  );
};

export {
  DexPage
};
