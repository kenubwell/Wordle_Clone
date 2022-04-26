import React, { useEffect, useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";
import {defaultBoard, generateWordSet} from "./components/WordsMatrix/WordsMatrix";
import {createContext} from "react"; 
import GameOver from "./components/GameOver/GameOver";

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]); 
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});
  const [correctWord, setCorrectWord] = useState("");


  useEffect(() => {
    generateWordSet().then((words) => {
      console.log(words);
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord.toUpperCase());
    });
  }, []);

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
      let currentWord = "";
      for (let i = 0; i < 5; i++){
        currentWord += board[currentAttempt.attempt][i];
      }

    if (wordSet.has(currentWord.toLocaleLowerCase())){
      setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPosition: 0});
    }
    else{
      alert("Word Not Found");
    }

    if (currentWord === correctWord){
      setGameOver({gameOver : true, guessedWord : true});
      return;
    }
    if (currentAttempt.attempt === 5){
      setGameOver({gameOver : true, guessedWord : false});
    }
  }

  return (
    <div className="App">
      <NavBar/>
      <AppContext.Provider value = {{board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter, correctWord, setDisabledLetters, disabledLetters, setGameOver, gameOver}}>
        <div className="game">
          <Board/>
          {gameOver.gameOver ? <GameOver/> : <Keyboard/>}
        </div>
      </AppContext.Provider>

    </div>
  );
}

export default App;
