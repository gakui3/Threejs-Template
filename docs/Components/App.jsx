import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Mode } from "./Params.js";
import { GameModeHome } from "./GameModeHome.jsx";
import { StrollModeTop } from "./StrollModeTop.jsx";

export const App = () => {
  const [showGameModeHome, setShowGameModeHome] = useState(false);
  const [currentStates, setCurrentStates] = useState(Mode.GameHomeMode);

  if (currentStates === Mode.GameHomeMode) {
    return (<GameModeHome showGameModeHome={showGameModeHome} setShowGameModeHome={setShowGameModeHome} currentStates={currentStates} setCurrentStates={setCurrentStates} />);
  } else if (currentStates === Mode.StrollMode) {
    return (<StrollModeTop currentStates={currentStates} setCurrentStates={setCurrentStates}/>);
  }
};
