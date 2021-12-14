import React from 'react';

const statusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${current.isXNest ? 'X' : '0'}`}
      {!winner && noMovesLeft && `Match Tied`}
    </h2>
  );
};

export default statusMessage;
