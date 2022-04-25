import React from "react";
import "./Board.css";
import LetterValue from "../LetterValue/LetterValue";

const Board = () => {

    return ( 
        <div className="board-contain">
            <div className="board-row">
                <LetterValue letterPosition={0} attemptedValue= {0}/>
                <LetterValue letterPosition={1} attemptedValue= {0}/>
                <LetterValue letterPosition={2} attemptedValue= {0}/>
                <LetterValue letterPosition={3} attemptedValue= {0}/>
                <LetterValue letterPosition={4} attemptedValue= {0}/>
                <LetterValue letterPosition={5} attemptedValue= {0}/>
            </div>
            <div className="board-row">
                <LetterValue letterPosition={0} attemptedValue= {1}/>
                <LetterValue letterPosition={1} attemptedValue= {1}/>
                <LetterValue letterPosition={2} attemptedValue= {1}/>
                <LetterValue letterPosition={3} attemptedValue= {1}/>
                <LetterValue letterPosition={4} attemptedValue= {1}/>
                <LetterValue letterPosition={5} attemptedValue= {1}/>
            </div>
            <div className="board-row">
                <LetterValue letterPosition={0} attemptedValue= {2}/>
                <LetterValue letterPosition={1} attemptedValue= {2}/>
                <LetterValue letterPosition={2} attemptedValue= {2}/>
                <LetterValue letterPosition={3} attemptedValue= {2}/>
                <LetterValue letterPosition={4} attemptedValue= {2}/>
                <LetterValue letterPosition={5} attemptedValue= {2}/>
            </div>
            <div className="board-row">
                <LetterValue letterPosition={0} attemptedValue= {3}/>
                <LetterValue letterPosition={1} attemptedValue= {3}/>
                <LetterValue letterPosition={2} attemptedValue= {3}/>
                <LetterValue letterPosition={3} attemptedValue= {3}/>
                <LetterValue letterPosition={4} attemptedValue= {3}/>
                <LetterValue letterPosition={5} attemptedValue= {3}/>
            </div>
            <div className="board-row">
                <LetterValue letterPosition={0} attemptedValue= {4}/>
                <LetterValue letterPosition={1} attemptedValue= {4}/>
                <LetterValue letterPosition={2} attemptedValue= {4}/>
                <LetterValue letterPosition={3} attemptedValue= {4}/>
                <LetterValue letterPosition={4} attemptedValue= {4}/>
                <LetterValue letterPosition={5} attemptedValue= {4}/>
            </div>
            <div className="board-row">
                <LetterValue letterPosition={0} attemptedValue= {5}/>
                <LetterValue letterPosition={1} attemptedValue= {5}/>
                <LetterValue letterPosition={2} attemptedValue= {5}/>
                <LetterValue letterPosition={3} attemptedValue= {5}/>
                <LetterValue letterPosition={4} attemptedValue= {5}/>
                <LetterValue letterPosition={5} attemptedValue= {5}/>
            </div>
        </div>
     );
}
 
export default Board;