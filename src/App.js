import React, { useReducer } from 'react';
import { Board } from './Board'
import './App.css';
import { initialBoardState } from './state';
import { gameStep } from './game';

function App() {

  const [state, dispatch] = useReducer(gameStep, initialBoardState)

  return (
    <div className="app">
      <header>
        <h3>Komble</h3>
      </header>
      <Board state={state}/>
      <button onClick={() => { dispatch({ type: 'DEBUG' })}}>debug</button>
    </div>
  );
}

export default App;
