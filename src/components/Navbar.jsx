/**
 * NAVBAR COMPONENT
 * 
 * Responsive navigation bar with smooth scrolling to sections.
 * Displays logo (initials) and navigation menu.
 * Reads personal data from portfolioData.js
 */

import React from 'react';
import portfolioData from '../data/portfolioData';

function Navbar() {
  // Get name from portfolio data
  const { name } = portfolioData.personal;
  
  // Generate initials for logo (e.g., "John Doe" -> "JD")
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo with initials */}
        <a href="#home" className="logo">{initials}</a>
        
        {/* Navigation menu */}
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;