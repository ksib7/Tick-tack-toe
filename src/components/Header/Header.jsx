import React from "react";

import "./Header.scss";

export const Header = ({ Xscores, Oscores }) => {
  return (
    <div className="header">
      <h1>Scores:</h1>
      <div className="header__players">
        <h2>
          Player 1 (
          <span
            style={{
              textShadow:
                "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
              color: "blue",
            }}
          >
            X
          </span>
          ): {Xscores}
        </h2>
        <h2>
          Player 2 (
          <span
            style={{
              textShadow:
                "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
              color: "red",
            }}
          >
            O
          </span>
          ): {Oscores}
        </h2>
      </div>
    </div>
  );
};
