/**
 * HERO COMPONENT
 * 
 * Eye-catching landing section with main heading, tagline, and CTA buttons.
 * Now includes CV download button and social links.
 * All content comes from portfolioData.js
 */

import React from 'react';
import portfolioData from '../data/portfolioData';

function Hero() {
  // Destructure personal information from portfolio data
  const { name, title, tagline, description, cvLink, social } = portfolioData.personal;

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Main heading with name */}
        <h1>Hi, I'm {name}</h1>
        
        {/* Professional title and tagline */}
        <p className="hero-tagline">{title} | {tagline}</p>
        
        {/* Brief description */}
        <p className="hero-description">{description}</p>
        
        {/* 🆕 Social links - visible in hero section */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {social.github && (
            <a 
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>🔗</span> GitHub
            </a>
          )}
          
          {social.linkedin && (
            <a 
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>💼</span> LinkedIn
            </a>
          )}
        </div>
        
        {/* Call-to-action buttons */}
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-white">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
          
          {/* 🆕 CV Download button */}
          {cvLink && (
            <a 
              href={cvLink}
              className="btn btn-outline"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              📄 Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;