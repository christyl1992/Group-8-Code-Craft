import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className={`leftSide ${openLinks ? 'open' : 'close'}`}>
        <h1>CodeCraft</h1>
        <div className="hiddenLinks"></div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* Conditionally render MenuIcon or CloseIcon based on openLinks state */}
        <button className="menuIconBtn" onClick={toggleNavbar}>
          {openLinks ? 'Close' : 'Menu'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
