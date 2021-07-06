import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Movies and TV-Series Hub 📽️
    </span>
  );
};

export default Header;
