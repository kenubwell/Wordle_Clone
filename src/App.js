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

  return (
    <div className="App">
      <NavBar/>
      <AppContext.Provider value = {{board, setBoard}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>

    </div>
  );
}

export default App;
