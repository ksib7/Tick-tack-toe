import React, { useEffect, useState } from "react";

import { TickTackButton } from "@/components/UI/TickTackButton/TickTackButton";

import { Button } from "@/components/UI/Button/Button";

import "./Board.scss";
import { Header } from "../Header/Header";

export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [win, setWin] = useState("");
  const [Xscores, setXScores] = useState(0);
  const [Oscores, setOScores] = useState(0);

  useEffect(() => {
    const winningTurn = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    let winner = "";

    for (let i = 0; i < winningTurn.length; i++) {
      const checkBoardTurn = winningTurn[i];
      const checkBoardValue = checkBoardTurn.map((item) => board[item]);
      const checkValue = checkBoardValue[0];
      const isFinished = checkBoardValue.every((item) => item === checkValue);

      winner = isFinished ? checkValue : null;

      if (winner) {
        setWin(winner === "X" ? player1 : player2);
      }

      if (winner === "X") {
        setXScores(Xscores + 1);
      } else if (winner === "O") {
        setOScores(Oscores + 1);
      }
    }
  }, [board]);

  const handleClick = (idx) => {
    if (idx < 0 || idx > 8 || board[idx] || win) {
      return;
    } else {
      const newboard = [...board];
      newboard.splice(idx, 1, turn);
      setBoard(newboard);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const resetTurn = () => {
    setBoard(Array(9).fill(""));
    setWin("");
    setTurn(turn === "X" ? "O" : "X");
  };

  return (
    <div className="board container">
      <Header
        player1={player1}
        setPlayer1={setPlayer1}
        player2={player2}
        setPlayer2={setPlayer2}
        Xscores={Xscores}
        Oscores={Oscores}
      />
      {win && <div className="board__player">{win} is a winner!</div>}
      <div className="board__grid">
        {board.map((item, idx) => (
          <TickTackButton
            key={idx}
            value={item}
            index={idx}
            handleClick={handleClick}
            turn={item}
          />
        ))}
      </div>
      <Button resetTurn={resetTurn}>New game</Button>
    </div>
  );
};
