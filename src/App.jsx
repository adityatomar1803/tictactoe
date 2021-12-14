import React, { useState } from 'react';
import Boards from './components/Boards';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helper';

const App = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const NEW_GAME = [
    {
      board: Array(9).fill(null),
      isXNext: true,
    },
  ];
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

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
    setCurrentMove(prev => prev + 1);
  };

  const { winner, winningSquare } = calculateWinner(current.board);
  console.log(winner);

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      {/* react expects a single element. This whole code is inside component knows as Fragments, thats why there 
      is no error. */}
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      {/* <h2>{message}</h2> */}
      <Boards
        board={current.board}
        squareClickHandler={squareClickHandler}
        winningSquare={winningSquare}
      />
      <button onClick={onNewGame}>Start New Game</button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
