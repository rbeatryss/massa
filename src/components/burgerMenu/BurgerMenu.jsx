import React from "react";
import "./BurgerMenu.css";
import close from "../../assets/close.svg"

const BurgerMenu = ({ isOpen, toggleMenu, onNavigate }) => {
  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleMenu}>
      <img src={close} alt="close" />
      </button>
      <ul>
        <li><button onClick={() => onNavigate('about')}>About</button></li>
        <li><button onClick={() => onNavigate('events')}>Events</button></li>
        <li><button onClick={() => onNavigate('sounds')}>Sounds</button></li>
        <li><button onClick={() => onNavigate('community')}>Community</button></li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
