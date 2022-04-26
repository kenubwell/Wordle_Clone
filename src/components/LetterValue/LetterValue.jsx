import React, {useContext, useEffect} from "react";
import "./LetterValue.css";
import App, { AppContext } from "../../App";

const LetterValue = ({letterPosition, attemptedValue}) => {
    const {board, correctWord, currentAttempt, setDisabledLetters} = useContext(AppContext);
    const letter = board[attemptedValue][letterPosition];

    const correct = correctWord.toUpperCase()[letterPosition] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = currentAttempt.attempt > attemptedValue && (correct ? "correct" : almost ? "almost" : "wrong");

    useEffect(() =>{
        if (letter !== "" && !correct && !almost){
            setDisabledLetters((previous) => [...previous, letter]);
        }
    }, [currentAttempt.attempt]);

    return ( 
        <div className="letter-val" id={letterState}>
            {letter}
        </div>
     );
}
 
export default LetterValue;