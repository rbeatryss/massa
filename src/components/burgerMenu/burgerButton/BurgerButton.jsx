import React from "react";
import "./BurgerButton.css";
import logo from "../../../assets/logo.svg"

const BurgerButton = ({ toggleMenu }) => {
  return (
    <button className="burger-btn" onClick={toggleMenu}>
       <img src={logo} alt="menu" />
    </button>
  );
};

export default BurgerButton;
