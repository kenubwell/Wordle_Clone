import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";
import {defaultBoard} from "./components/WordsMatrix/WordsMatrix";
import {createContext} from "react"; 

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0});

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1});

  }

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1});
  }

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;
    setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPosition: 0});
  }

  return (
    <div className="App">
      <NavBar/>
      <AppContext.Provider value = {{board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter}}>
        <div className="game">
          <Board/>
          <Keyboard/>
        </div>
      </AppContext.Provider>

    </div>
  );
}

export default App;
