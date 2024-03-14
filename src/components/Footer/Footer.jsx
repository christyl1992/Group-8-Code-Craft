import React from 'react';
import './Footer.css';
// import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/Mikemupararano/revision-app" target="_blank" rel="noopener noreferrer">
          {/* <GitHubIcon /> */}
        </a>
        </div>
      <p>&copy; 2024 Team 8</p>
    </div>
  );
}

export default Footer;
