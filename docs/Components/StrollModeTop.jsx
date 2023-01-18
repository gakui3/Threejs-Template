import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Mode } from "./Params";

export const StrollModeTop = (props) => {
  const backGameModeHome = () => {
    props.setCurrentStates(Mode.GameHomeMode);
  };

  return ReactDOM.createPortal(
    <div className="strollMode-root">
      <button className="strollMode-back-button" onClick={backGameModeHome}>もどる</button>
      <button className="strollMode-jummp-button">ジャンプ</button>
    </div>,
    document.getElementById("uis"),
  );
};
