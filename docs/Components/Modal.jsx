import React, { useState } from "react";
import ReactDOM from "react-dom";

const useModal = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const Modal = () => {
    if (!show) {
      return <></>;
    } else {
      return ReactDOM.createPortal(
        <>
          <div className="modal-root"></div>
          <div className="modal-content">
            <button className="modal-button" onClick={closeModal}>close</button>
          </div>
        </>,
        document.getElementById("modal"),
      );
    }
  };

  return { Modal, openModal, closeModal };
};

export default useModal;
