import React, { useState } from 'react';
import Boards from './components/Boards';
import { calculateWinner } from './helper';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setX] = useState(false);

  const squareClickHandler = pos => {
    if (board[pos] || winner) return;
    setBoard(prev => {
      return prev.map((square, map_pos) => {
        if (map_pos === pos) {
          return isXNext ? 'X' : '0';
        }
        return square;
      });
    });
    setX(!isXNext);
  };

  const winner = calculateWinner(board);
  console.log(winner);

  const message = winner
    ? `The winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : '0'}`;

  return (
    <div className="app">
      {/* react expects a single element. This whole code is inside component knows as Fragments, thats why there 
      is no error. */}
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Boards board={board} squareClickHandler={squareClickHandler} />
    </div>
  );
};

export default App;
