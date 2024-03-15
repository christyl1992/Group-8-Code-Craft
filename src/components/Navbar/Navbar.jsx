import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import './Navbar.css';


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
  
      <div className="container-fluid text-white">
<div className="navbar">
      <div className={`leftSide ${openLinks ? 'open' : 'close'}`}>
        <h1>CodeCraft</h1>
        <div className="hiddenLinks"></div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
            <Link to="/">Module Page</Link>
      </div>
       
    </div>
     </div>
        
  );
}

export default Navbar;
