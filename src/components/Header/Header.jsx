import React from "react";
import { PlayerIconO } from "../UI/PlayerIconO/PlayerIconO";
import { PlayerIconX } from "../UI/PlayerIconX/PlayerIconX";

import "./Header.scss";

export const Header = ({ Xscores, Oscores }) => {
  return (
    <div className="header">
      <div className="header__players">
        <PlayerIconX Xscores={Xscores}></PlayerIconX>
        <PlayerIconO Oscores={Oscores}></PlayerIconO>
      </div>
    </div>
  );
};
