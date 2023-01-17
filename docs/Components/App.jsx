import React from "react";
import ReactDOM from "react-dom/client";

// import useModal from "./Modal.jsx";
import useGameModeHome from "./GameModeHome.jsx";
import useHowToPlay from "./HowToPlay.jsx";

export const App = () => {
  // const { Modal, openModal } = useModal();
  const { GameModeHome } = useGameModeHome();

  return (
    <>
      <GameModeHome />
    </>
  );

  // return (
  //   <button className="modal-button" onClick={openModal}>open</button>
  // )
};
