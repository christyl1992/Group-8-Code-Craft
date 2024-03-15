import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import HTML from '../HTML-course/HTML';
import '../About/About'
import './Navbar.css';
import CssCourse from '../CssCourse/CssCourse';

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
          
      </div>
        <div className="container ">

          <Link to="/quiz">Quiz</Link>
          <Link to="/progress">Progress</Link>
        </div>
    </div>
     </div>
        
  );
}

export default Navbar;
