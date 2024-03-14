import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Conditionally render MenuIcon or CloseIcon based on openLinks state */}
        {/* <button className="menuIconBtn" onClick={toggleNavbar}> */}
          {/* {openLinks ? 'Close' : 'Menu'} */}
        {/* </button> */}
      </div>
    </div>
{/* //second nav */}
<nav className = "navbar navbar-expand-sm navbar-light bg-dark navbar-dark">
      {/* <!-- Container wrapper --> */}
      <div className="container-fluid">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav flex-row">
              <li className="nav-item me-2 me-lg-0">
                  <a className="nav-link text-white" href="#" role="button" data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" className="btn shadow-0 p-0 me-3" aria-controls="#sidenav-1" aria-haspopup="true">
                      <i className="fas fa-bars me-1"></i>
                  </a>
              </li>
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                  <a className="navbar-brand">Material Design for Bootstrap</a>
              </li>
          </ul>
          {/* <!-- Left links --> */}

          <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item">
                  <a className="nav-link text-white" href="#"><i class="fas fa-envelope me-1"></i>Contact</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link text-white" href="#"><i class="fas fa-comments me-1"></i>Support</a>
              </li>
              <li className="nav-item">
                  <a class="nav-link text-white" href="#"><i class="fas fa-user-alt me-1"></i>Account</a>
              </li>
              {/* <!-- Dropdown --> */}
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                      Dropdown
                  </a>
                  {/* <!-- Dropdown menu --> */}
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li>
                          <a className="dropdown-item" href="#">Action</a>
                      </li>
                      <li>
                          <a className="dropdown-item" href="#">Another action</a>
                      </li>
                      <li>
                          <hr className="dropdown-divider" />
                      </li>
                      <li>
                          <a className="dropdown-item" href="#">Something else here</a>
                      </li>
                  </ul>
              </li>
          </ul>
      </div>
      {/* <!-- Container wrapper --> */}
  </nav>
    
      </div>
      
    
  );
}

export default Navbar;
