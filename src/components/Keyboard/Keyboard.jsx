import React, {useContext, useCallback, useEffect} from "react";
import "./Keyboard.css";
import Key from "../Key/Key";
import App, { AppContext } from "../../App";

const Keyboard = () => {

    const {onDelete, onEnter, onSelectLetter, disabledLetters} = useContext(AppContext);

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyboard = useCallback((event) => {
        if (event.key === "Enter"){
            onEnter();
        }
        else if (event.key === "Backspace") {
            onDelete();
        }
        else{
            keys1.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key);
                }
            });
            keys2.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key);
                }
            });
            keys3.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key);
                }
            });
        }
    } )

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        };
    }, [handleKeyboard]);

    return ( 
        <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="line-one">
                {keys1.map((key) => {
                    return <Key keyValue = {key} disabled={disabledLetters.includes(key)}/>; 
                })}
            </div>
            <div className="line-two">
                {keys2.map((key) => {
                    return <Key keyValue = {key} disabled={disabledLetters.includes(key)}/>;
                })}
            </div>
            <div className="line-three">
                <Key keyValue={"ENTER"} largeKey/>
                {keys3.map((key) => {
                    return <Key keyValue = {key} disabled={disabledLetters.includes(key)}/>; 
                })}
                <Key keyValue={"DELETE"} largeKey/>
            </div>
        </div>
     );
}
 
export default Keyboard;