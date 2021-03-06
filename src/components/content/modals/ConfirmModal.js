import React from "react";

function ConfirmModal(props) {
  const handleButtonYes = () => {
    if (typeof props.onYes === "function") {
      props.onYes();
    }
  };

  const handleButtonNo = () => {
    if (typeof props.onNo === "function") {
      props.onNo();
    }
  };

  return (
    <div className="confirm-modal modal">
      <h1>Na pewno?</h1>
      <button onClick={handleButtonYes}>Tak</button>
      <button onClick={handleButtonNo}>Nie</button>
    </div>
  );
}

export default ConfirmModal;
