import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1>Alessandro Saggese</h1>
        <ul>
          {/* <li><a href="#home">Home</a></li> */}
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
