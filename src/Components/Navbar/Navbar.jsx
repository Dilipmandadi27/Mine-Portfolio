import React from "react";
import "./Navbar.css";
import "../../App.css";

const Navbar = () => {
  return (
    <header className="header container">
      <div className="logo">
        <p>Dilipaaa</p>
      </div>

      <div className="nav-links">
        <a href="">About</a>
        <a href="">Experience</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
        <div className="menubar-menu">
          <div className="menubar-icon">
            <span></span>
            <span></span>
            <span></span>
            </div>
            </div>
    </header>
  );
};

export default Navbar;
