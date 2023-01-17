import React from "react";
import ReactDOM from "react-dom/client";

import useModal from "./Modal.jsx";

export const App = () => {
  const { Modal, openModal } = useModal();
  return (
    <>
      <button className="modal-button" onClick={openModal}>open</button>
      <div><Modal /></div>
    </>
  );
};
