/**
 * ABOUT COMPONENT
 * 
 * Displays personal information, bio paragraphs, and profile image.
 * Shows contact details in a grid layout including social links.
 * Edit portfolioData.js to customize content.
 */

import React from 'react';
import portfolioData from '../data/portfolioData';

function About() {
  // Get personal information
  const { name, email, phone, location, status, social } = portfolioData.personal;
  
  // Get about paragraphs
  const { paragraphs } = portfolioData.about;

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section title */}
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          {/* Profile Image - Currently using placeholder */}
          <div className="profile-image-container">
            <img src="/Fred.jpeg" alt={name} className="profile-placeholder" />
            
            {/* To use your own image:
                1. Add your photo to the public folder (e.g., profile.jpg)
                2. Replace the div above with:
                <img src="/profile.jpg" alt={name} className="profile-placeholder" />
            */}
          </div>
          
              

          {/* About text section */}
          <div className="about-text">
            <h3>Hello! I'm {name}</h3>
            
            {/* Map through paragraphs from data */}
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            {/* Personal information grid */}
            <div className="info-list">
              <div className="info-item">
                <strong>📧 Email:</strong>
                <span>{email}</span>
              </div>
              <div className="info-item">
                <strong>📱 Phone:</strong>
                <span>{phone}</span>
              </div>
              <div className="info-item">
                <strong>📍 Location:</strong>
                <span>{location}</span>
              </div>
              <div className="info-item">
                <strong>💼 Status:</strong>
                <span>{status}</span>
              </div>
              
              {/* 🆕 GitHub link */}
              {social.github && (
                <div className="info-item">
                  <strong>🔗 GitHub:</strong>
                  <a 
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--primary-color)',
                      textDecoration: 'none',
                      transition: 'var(--transition-base)'
                    }}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                  >
                    View Profile
                  </a>
                </div>
              )}
              
              {/* 🆕 LinkedIn link */}
              {social.linkedin && (
                <div className="info-item">
                  <strong>💼 LinkedIn:</strong>
                  <a 
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--primary-color)',
                      textDecoration: 'none',
                      transition: 'var(--transition-base)'
                    }}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                  >
                    Connect
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;