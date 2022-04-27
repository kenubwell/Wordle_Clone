import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return ( 
        <div className="header-backdrop">
            <div>
                <img src ="/images/Baltimore-Ravens-logo.jpg" className = "header-image-left" alt = "ravens"/>
            </div>
            <div>
                <h1 className="header-wordle">Ravens Wordle</h1>
            </div>
            <div>
                <img src ="/images/Baltimore-Ravens-logo.jpg" className = "header-image-right" alt = "ravens"/>
            </div>
  
        </div>
     );
}
 
export default NavBar;