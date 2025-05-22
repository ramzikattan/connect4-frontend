import { useState } from "react";
import axios from "axios";

const EMPTY_BOARD = () =>
    Array(6).fill().map(() =>
      Array(7).fill().map(() => [0, 0])
    );
  

function GameBoard({ playerName }) {
  const [board, setBoard] = useState(EMPTY_BOARD());
  const [currentPlayer, setCurrentPlayer] = useState("human");
  const [winner, setWinner] = useState(null);

  const handleColumnClick = async (colIndex) => {
    if (currentPlayer !== "human" || winner) return;

    // Find the lowest empty row in the column
    const newBoard = board.map(row => [...row]);
    for (let row = 5; row >= 0; row--) {
      if (newBoard[row][colIndex][0] === 0 && newBoard[row][colIndex][1] === 0) {
        newBoard[row][colIndex][0] = 1; // Human is channel 0
        setBoard(newBoard);
        setCurrentPlayer("bot");

        // Send board to backend for prediction
        const boardForBackend = newBoard.map(row =>
          row.map(cell => [cell[0], cell[1]])
        );

        try {
          const res = await axios.post("http://13.59.247.184:5001/predict", {
            board: boardForBackend,
          });
          const botMove = res.data.move;

          // Bot makes a move
          for (let row = 5; row >= 0; row--) {
            if (newBoard[row][botMove][0] === 0 && newBoard[row][botMove][1] === 0) {
              newBoard[row][botMove][1] = 1; // Bot is channel 1
              break;
            }
          }

          setBoard(newBoard);
          setCurrentPlayer("human");
        } catch (err) {
          console.error("Bot failed:", err);
        }

        break;
      }
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome, {playerName}!</h2>
      <div className="grid grid-cols-7 gap-1 bg-blue-700 p-2 rounded-md max-w-fit mx-auto">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => handleColumnClick(colIndex)}
            >
              {cell[0] === 1 && <div className="w-8 h-8 bg-red-500 rounded-full" />}
              {cell[1] === 1 && <div className="w-8 h-8 bg-yellow-400 rounded-full" />}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GameBoard;

  