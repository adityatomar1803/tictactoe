import React from 'react';
import Boards from './components/Boards';

const App = () => {
  return (
    <div className="app">
      {/* react expects a single element. This whole code is inside component knows as Fragments, thats why there 
      is no error. */}
      <h1>TIC TAC TOE</h1>
      <Boards />
    </div>
  );
};

export default App;
