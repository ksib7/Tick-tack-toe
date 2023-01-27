import React from "react";

import "./TickTackButton.scss";

export const TickTackButton = ({ value, handleClick, index, turn }) => {
  const Ostyle = {
    color: "red",
  };

  const Xstyle = {
    color: "blue",
  };

  return (
    <button
      style={turn === "X" ? Xstyle : Ostyle}
      turn={turn}
      className="turn"
      onClick={() => handleClick(index)}
    >
      {value}
    </button>
  );
};
