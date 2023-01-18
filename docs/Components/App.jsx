import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { GameModeHome } from "./GameModeHome.jsx";

export const App = () => {
  const [showGameModeHome, setShowGameModeHome] = useState(true);
  return (
    <>
      <GameModeHome showGameModeHome={showGameModeHome} setShowGameModeHome={setShowGameModeHome} />
    </>
  );
};
