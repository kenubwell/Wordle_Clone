import React from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";


function App() {
  return (
    <div>
      <NavBar/>
      <Board/>
      <Keyboard/>
    </div>
  );
}

export default App;
