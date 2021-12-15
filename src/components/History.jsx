import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                type="button"
                onClick={() => moveTo(move)}
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
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
