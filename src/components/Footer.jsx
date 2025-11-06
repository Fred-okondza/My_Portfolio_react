/**
 * FOOTER COMPONENT
 * 
 * Displays social media links and copyright information.
 * This is the last section of the portfolio.
 * Social links come from portfolioData.js
 */

import React from 'react';
import portfolioData from '../data/portfolioData';

function Footer() {
  // Get personal data
  const { name, social, cvLink } = portfolioData.personal;
  
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Social media links */}
      <div className="social-links">
        {/* GitHub link */}
        {social.github && (
          <a 
            href={social.github} 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            🔗 GitHub
          </a>
        )}
        
        {/* LinkedIn link */}
        {social.linkedin && (
          <a 
            href={social.linkedin} 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            💼 LinkedIn
          </a>
        )}
        
    
        
        {/* 🆕 CV download link in footer */}
        {cvLink && (
          <a 
            href={cvLink}
            className="social-link"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            title="Download CV"
          >
            📄 Download CV
          </a>
        )}
      </div>
      
      {/* Copyright text */}
      <p>
        &copy; {currentYear} {name}. All rights reserved.
      </p>
      
      {/* Built with text */}
      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
        Built with React.js ⚛️
      </p>
    </footer>
  );
}

export default Footer;