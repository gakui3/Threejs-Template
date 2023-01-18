import React, { useState } from "react";
import ReactDOM from "react-dom";

import { HowToPlay } from "./HowToPlay.jsx";
import { Mode } from "./Params.js";

export const GameModeHome = (props) => {
  const [show, setShow] = useState(false);

  const openHowToPlay = () => {
    setShow(true);
  };

  const closeGameModeHome = () => {
    props.setShowGameModeHome(false);
  };

  const playStroll = () => {
    props.setCurrentStates(Mode.StrollMode);
  };

  return (
      <div className="gameModeHome-root">
          <HowToPlay show={show} setShow={setShow} />
          <div className="gameModeHome-background" />
          <button className="gameModeHome-back-button">もどる</button>
          <p className="gameModeHome-coinCount">
              <span className="gameModeHome-coinCount-text">コイン</span>
          </p>
          <p className="gameModeHome-text">BUDDIOUSと一緒にレースにチャレンジしよう!</p>
          <div className="gameModeHome-play-buttons">
              <button className="gameModeHome-play-button" onClick={openHowToPlay}>遊び方</button>
              <button className="gameModeHome-play-button" onClick={playStroll}>連れ歩きモード</button>
              <button className="gameModeHome-play-button">レースモード</button>
          </div>
      </div>);
};
