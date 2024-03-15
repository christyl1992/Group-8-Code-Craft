import React from "react";
//import profileImage from "./about-images/mike.jpeg";
import "./About.css";

function About() {
  return (
    <div className="about-container bg-primary">
      <div className="about-content">
        <h2>About Us</h2>
        <div className="about-text">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <p className="lead">
               We are hdhdjdkdkdkdkdkdkdk           
          </p>
          <p className="lead">
            hhshshshshshshshshshshshsh
          </p>
          <p className="lead">
            hshshshshshsh
          </p>
           
          <p className="lead">
            Thank you for visiting our web application! We look forward to connecting
            with you and discussing how we can work together to bring your coding to reality!            development projects to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
