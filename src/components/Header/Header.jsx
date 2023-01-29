import React from "react";
import { PlayerIconO } from "../UI/PlayerIconO/PlayerIconO";
import { PlayerIconX } from "../UI/PlayerIconX/PlayerIconX";

import "./Header.scss";

export const Header = ({
  Xscores,
  Oscores,
  player1,
  setPlayer1,
  player2,
  setPlayer2,
}) => {
  return (
    <div className="header">
      <div className="header__players">
        <PlayerIconX
          player1={player1}
          setPlayer1={setPlayer1}
          Xscores={Xscores}
        ></PlayerIconX>
        <PlayerIconO
          player2={player2}
          setPlayer2={setPlayer2}
          Oscores={Oscores}
        ></PlayerIconO>
      </div>
    </div>
  );
};
