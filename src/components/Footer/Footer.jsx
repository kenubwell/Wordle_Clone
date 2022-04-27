import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'> Ken Blackwell's </medium><medium className="footer-color"> Ravens Wordle &copy;{new Date().getFullYear()} | No Rights Reserved | Open-Source</medium>
      </div>
      <nav>
        <li className = "footer-list"><a href="https://www.baltimoreravens.com/" target="_blank"><img src ="/images/ravens-text-purp.jpg" className = "footer-image" alt = "ravens"/></a></li>
        <li className = "footer-list"><a href="https://www.nfl.com/" target="_blank"><img src ="/images/nfl-logo.jpg" className = "footer-image" alt = "nfl"/></a></li>
      </nav>
    </footer>
  );
};

export default Footer;