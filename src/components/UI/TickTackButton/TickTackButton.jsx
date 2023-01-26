import React from "react";

import "./TickTackButton.scss";

export const TickTackButton = ({ value, handleClick, index }) => {
  return (
    <button className="turn" onClick={() => handleClick(index)}>
      {value}
    </button>
  );
};
