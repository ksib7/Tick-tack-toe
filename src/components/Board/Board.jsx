import React, { useEffect, useState } from "react";

import { TickTackButton } from "@/components/UI/TickTackButton/TickTackButton";

import { Button } from "@/components/UI/Button/Button";

import "./Board.scss";

export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [player, setPlayer] = useState("");
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
        setPlayer(winner === "X" ? "Player 1" : "Player 2");
      }

      if (winner === "X") {
        setXScores(Xscores + 1);
      } else if (winner === "O") {
        setOScores(Oscores + 1);
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
      {/* <h1>Board</h1> */}
      <div className="board__scores">
        <h1>Scores:</h1>
        <div className="board__scores__players">
          <h2>
            Player1 (
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
            Player2 (
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
