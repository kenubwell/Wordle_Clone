import React, { useContext } from "react";
import "./Key.css";
import { AppContext } from "../../App";

const Key = ({keyValue, largeKey, disabled}) => {
    const {onDelete, onEnter, onSelectLetter } = useContext(AppContext);

    const selectLetter = () =>{
        if (keyValue === "ENTER"){
            onEnter();
        } 
        else if (keyValue === "DELETE"){
            onDelete();
          }  
        else {
          onSelectLetter(keyValue);
        }
    };

    return ( 
        <div className="key" id={largeKey ? "large-key" : disabled && "disabled"} onClick={selectLetter}>
            {keyValue}
        </div>
     );
}
 
export default Key;