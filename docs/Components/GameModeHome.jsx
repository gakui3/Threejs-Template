import React, { useState } from "react";
import ReactDOM from "react-dom";

import useHowToPlay from "./HowToPlay.jsx";

const { HowToPlay, openHowToPlay } = useHowToPlay;

const useGameModeHome = () => {
  const GameModeHome = () => {
    return ReactDOM.createPortal(
    <>
        <div className="gameModeHome-background"></div>
        <button className="gameModeHome-back-button">もどる</button>
        <p className="gameModeHome-coinCount">
            <span className="gameModeHome-coinCount-text">コイン</span>
        </p>
        <p className="gameModeHome-text">BUDDIOUSと一緒にレースにチャレンジしよう!</p>
        <div className="gameModeHome-play-buttons">
            <button className="gameModeHome-play-button" onClick={openHowToPlay}>遊び方</button>
            <button className="gameModeHome-play-button">連れ歩きモード</button>
            <button className="gameModeHome-play-button">レースモード</button>
        </div>
    </>,
    document.getElementById("gameModeHome"));
  };

  return { GameModeHome };
};

export default useGameModeHome;
