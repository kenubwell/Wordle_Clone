import React from "react";
import "./Key.css";

const Key = ({keyValue}) => {
    return ( 
        <div className="key">
            {keyValue}
        </div>
     );
}
 
export default Key;