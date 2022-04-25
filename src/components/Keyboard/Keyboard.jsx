import React from "react";
import "./Keyboard.css";
import Key from "../Key/Key";

const Keyboard = () => {

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return ( 
        <div className="keyboard">
            <div className="line-one">
                {keys1.map((key) => {
                    return <Key keyValue = {key}/> 
                })}
            </div>
            <div className="line-two">
                {keys2.map((key) => {
                    return <Key keyValue = {key}/>  
                })}
            </div>
            <div className="line-three">
                <Key keyValue={"ENTER"} largeKey/>
                {keys3.map((key) => {
                    return <Key keyValue = {key}/>  
                })}
                <Key keyValue={"DELETE"} largeKey/>
            </div>
        </div>
     );
}
 
export default Keyboard;