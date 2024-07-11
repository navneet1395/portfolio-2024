"use client";
import React, { useEffect, useState } from "react";
import Shape from "./shape";
function Square({ value, index, onSquareClick }) {
  return (
    <button
      key={index}
      className={`border-2 p-4 flex-1 h-[50px] ${
        value[index] === "X"
          ? "bg-red-500"
          : value[index] === "O"
          ? "bg-blue-500"
          : ""
      }`}
      onClick={() => onSquareClick(index)}
    >
      {value[index] ?? ""}
    </button>
  );
}
function Board({ boardValues, setBoardValues, className }) {
  const onSquareClick = (index) => {
    setBoardValues((prev) => {
      // Create a copy of the previous state array
      const newBoardValues = [...prev];

      // Check if the square is already filled
      if (newBoardValues[index] !== "") {
        return prev; // Return the previous state if the square is already filled
      }

      // Update the value at the specific index
      newBoardValues[index] =
        boardValues.filter((a) => a !== "").length % 2 === 0 ? "X" : "O";

      return newBoardValues; // Return the new state
    });
  };

  return (
    <div className={className}>
      <div className="border-3 shadow-lg">
        <div className="flex gap-0 items-center">
          <Square value={boardValues} onSquareClick={onSquareClick} index={0} />
          <Square value={boardValues} onSquareClick={onSquareClick} index={1} />
          <Square value={boardValues} onSquareClick={onSquareClick} index={2} />
        </div>
        <div className="flex gap-0 items-center">
          <Square value={boardValues} onSquareClick={onSquareClick} index={3} />
          <Square value={boardValues} onSquareClick={onSquareClick} index={4} />
          <Square value={boardValues} onSquareClick={onSquareClick} index={5} />
        </div>
        <div className="flex gap-0 items-center">
          <Square value={boardValues} onSquareClick={onSquareClick} index={6} />
          <Square value={boardValues} onSquareClick={onSquareClick} index={7} />
          <Square value={boardValues} onSquareClick={onSquareClick} index={8} />
        </div>
      </div>
    </div>
  );
}

const TicTacToePage = () => {
  const [boardValues, setBoardValues] = useState(Array(9).fill("")); // Initialize with 9 null values
  const [results, setResults] = useState("");
  function WinnerDeclaration() {
    boardValues.filter((a) => a !== "").length === 9 && setResults("Draw");
    const winnerArray = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i = 0; i < winnerArray.length; i++) {
      const [a, b, c] = winnerArray[i];
      if (
        boardValues[a] &&
        boardValues[a] === "X" &&
        boardValues[b] &&
        boardValues[b] === "X" &&
        boardValues[c] &&
        boardValues[c] === "X"
      ) {
        setResults("X is the Winner");
        break;
      } else if (
        boardValues[a] &&
        boardValues[a] === "O" &&
        boardValues[b] &&
        boardValues[b] === "O" &&
        boardValues[c] &&
        boardValues[c] === "O"
      ) {
        setResults("O is the Winner");
        break;
      }
    }
  }
  useEffect(() => {
    WinnerDeclaration();
  }, [boardValues]);

  return (
    <div className="mt-10 p-4">
      <h1>Tic Tac Toe Game</h1>
      <div className="flex gap-4">
        <Board
          boardValues={boardValues}
          setBoardValues={setBoardValues}
          className={`${
            results !== "" && "pointer-events-none"
          } flex-1 border-2 p-4 rounded-lg  `}
        />
        <div className="flex-2  flex flex-col border p-2 shadow-md rounded-lg justify-around">
          <div className="font-lg font-bold underline">Game Instruction</div>

          <div className="font-bold">
            {boardValues.filter((a) => a !== "").length % 2 === 0 ? "X" : "O"}{" "}
            Turn{" "}
          </div>
          <h2>{results !== "" && results}</h2>

          <button
            className="border-2 shadow rounded-md  border-white p-1 mt-2 bg-slate-400"
            onClick={() => {
              setBoardValues(Array(9).fill(""));
              setResults("");
            }}
          >
            Reset Game
          </button>
        </div>
      </div>

      <Shape
        box={[
          [1, 1, 1],
          [1, 0, 1],
          [1, 0, 0],
        ]}
      />
    </div>
  );
};

export default TicTacToePage;
