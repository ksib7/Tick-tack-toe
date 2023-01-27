import React, { useEffect, useState } from "react";

import { TickTackButton } from "@/components/UI/TickTackButton/TickTackButton";

import { Button } from "@/components/UI/Button/Button";

import "./Board.scss";

export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [player, setPlayer] = useState("");

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
        setPlayer(winner === "X" ? "Player 1" : "Player 2");
      }
    }
  }, [board]);

  const handleClick = (idx) => {
    if (idx < 0 || idx > 8 || board[idx] || player) {
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
    setPlayer("");
  };

  return (
    <div className="board container">
      <h1>Board</h1>
      {player && <div className="board__player">{player} is a winner!</div>}
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
      <Button resetTurn={resetTurn}>Reset</Button>
    </div>
  );
};
