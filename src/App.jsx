import React, { useState } from 'react';
import Boards from './components/Boards';
import { calculateWinner } from './helper';

const App = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      isXNext: true,
    },
  ]);

  const [currentMove, setCurerntMove] = useState(0);

  const current = history[currentMove];

  // const [isXNext, setX] = useState(false);
  console.log('history', history);

  const squareClickHandler = pos => {
    if (current.board[pos] || winner) return;

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, map_pos) => {
        if (map_pos === pos) {
          return last.isXNext ? 'X' : '0';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    // setX(!isXNext);
    setCurerntMove(prev => prev + 1);
  };

  const winner = calculateWinner(current.board);
  console.log(winner);

  const message = winner
    ? `The winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : '0'}`;

  return (
    <div className="app">
      {/* react expects a single element. This whole code is inside component knows as Fragments, thats why there 
      is no error. */}
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Boards board={current.board} squareClickHandler={squareClickHandler} />
    </div>
  );
};

export default App;
