import React, { Fragment } from "react";
import "./App.css";

// components
import InputGame from "./components/InputGame";
import ListGames from "./components/ListGames";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputGame />
        <ListGames />
      </div>
    </Fragment>
  );
}

export default App;
