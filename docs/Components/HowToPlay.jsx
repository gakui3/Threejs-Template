import React, { useState } from "react";
import ReactDOM from "react-dom";

const useHowToPlay = () => {
  const [show, setShow] = useState(true);

  const openHowToPlay = () => {
    setShow(true);
  };

  const closeHowToPlay = () => {
    setShow(false);
  };

  const HowToPlay = () => {
    if (!show) {
      return <></>;
    } else {
      return ReactDOM.createPortal(
        <>
          <div className="modal-root"></div>
          <div className="modal-content">
            <button className="modal-button" onClick={closeHowToPlay()}>close</button>
          </div>
        </>,
        document.getElementById("modal"),
      );
    }
  };

  return { HowToPlay, openHowToPlay };
};

export default useHowToPlay;
