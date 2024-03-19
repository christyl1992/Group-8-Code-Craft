
import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'; // Importing the CSS module
import img from "./code-craft-home.jpg"

function HomePage() {
  return (
    <div className="home">
      <div className="headerContainer">
      <img src={img} alt = "guy coding"/>

     </div>
      </div>
  );
}

export default HomePage;

