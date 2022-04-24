import React, { useState } from "react";
import { defaultBoard } from "../WordsMatrix/WordsMatrix";
import "./Board.css";
import LetterValue from "../LetterValue/LetterValue";

const Board = () => {

    const [board, setBoard] = useState(defaultBoard);

    return ( 
        <div className="board-contain">
            <div className="board-row"><LetterValue letterPosition={0} attemptedValue= {0}/></div>
            <div className="board-row"><LetterValue letterPosition={1} attemptedValue= {0}/></div>
            <div className="board-row"><LetterValue letterPosition={2} attemptedValue= {0}/></div>
            <div className="board-row"><LetterValue letterPosition={3} attemptedValue= {0}/></div>
            <div className="board-row"><LetterValue letterPosition={4} attemptedValue= {0}/></div>
            <div className="board-row"><LetterValue letterPosition={5} attemptedValue= {0}/></div>
        </div>
     );
}
 
export default Board;