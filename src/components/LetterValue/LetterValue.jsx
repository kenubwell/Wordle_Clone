import React, {useContext} from "react";
import "./LetterValue.css";
import App, { AppContext } from "../../App";

const LetterValue = ({letterPosition, attemptedValue}) => {
    const {board} = useContext(AppContext);
    const letter = board[attemptedValue][letterPosition];

    return ( 
        <div className="letter-val">
            {letter}
        </div>
     );
}
 
export default LetterValue;