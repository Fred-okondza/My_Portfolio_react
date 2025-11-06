/**
 * PROJECTS COMPONENT
 * 
 * Showcases portfolio projects in a responsive grid.
 * Each project card displays title, description, technologies, and links.
 * Projects data comes from portfolioData.js
 */

import React from 'react';
import portfolioData from '../data/portfolioData';

function Projects() {
  // Get all projects from portfolio data
  const { projects } = portfolioData;

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section title */}
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Projects grid */}
        <div className="projects-grid">
          {/* Map through each project */}
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project image/icon */}
              <div className="project-image">
                {project.image}
                {/* To use real images:
                    Replace {project.image} with:
                    <img src={project.image} alt={project.title} />
                */}
              </div>
              
              {/* Project content */}
              <div className="project-content">
                {/* Project title */}
                <h3>{project.title}</h3>
                
                {/* Project description */}
                <p>{project.description}</p>
                
                {/* Technology tags */}
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                {/* Project links (Demo & GitHub) */}
                <div className="project-links">
                  <a 
                    href={project.demoLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo →
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;