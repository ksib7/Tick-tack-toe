import React from "react";

import "./Button.scss";

export const Button = ({ children, resetTurn }) => {
  return (
    <button onClick={resetTurn} className="button">
      {children}
    </button>
  );
};
