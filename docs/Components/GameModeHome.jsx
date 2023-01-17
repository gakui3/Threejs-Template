import React, { useState } from "react";
import ReactDOM from "react-dom";

import { HowToPlay } from "./HowToPlay.jsx";

export const GameModeHome = () => {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(true);
  };

  return ReactDOM.createPortal(
      <>
        <HowToPlay show={show} setShow={setShow} />
        <div className="gameModeHome-background"></div>
        <button className="gameModeHome-back-button">もどる</button>
        <p className="gameModeHome-coinCount">
            <span className="gameModeHome-coinCount-text">コイン</span>
        </p>
        <p className="gameModeHome-text">BUDDIOUSと一緒にレースにチャレンジしよう!</p>
        <div className="gameModeHome-play-buttons">
            <button className="gameModeHome-play-button" onClick={open}>遊び方</button>
            <button className="gameModeHome-play-button">連れ歩きモード</button>
            <button className="gameModeHome-play-button">レースモード</button>
        </div>
    </>,
      document.getElementById("gameModeHome"));
};
