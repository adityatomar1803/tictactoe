import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div>
      <ul>
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                type="button"
                onClick={() => moveTo(move)}
                style={{ fontWeight: move === currentMove ? 'bold' : 'normal' }}
              >
                {move === 0 ? 'Go to Game start' : `Go to Move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
