import React, { useState } from "react";
import ReactDOM from "react-dom";

export const HowToPlay = (props) => {
  const close = () => {
    props.setShow(false);
  };

  if (!props.show) {
    return <></>;
  } else {
    return ReactDOM.createPortal(
      <>
          <div className="modal-background"></div>
          <div className="modal-content">
            <button className="modal-button-close" onClick={close}>close</button>
            <p className="modal-content-title">遊び方</p>
            <div className="modal-content-text">説明文</div>
          </div>
      </>,
      document.getElementById("modal"),
    );
  }
};
