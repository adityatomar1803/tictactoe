import React from 'react';

const statusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {' '}
            {current.isXNext ? 'X' : '0'}
          </span>
          {/* {console.log()} */}
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">0</span>
        </>
      )}
    </div>
  );
};

export default statusMessage;
