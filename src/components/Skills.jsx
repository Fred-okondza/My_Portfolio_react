/**
 * SKILLS COMPONENT
 * 
 * Displays technical skills organized by categories.
 * Each skill has a visual progress bar showing proficiency level.
 * Skills data comes from portfolioData.js
 */

import React from 'react';
import portfolioData from '../data/portfolioData';

function Skills() {
  // Get skills categories from portfolio data
  const { categories } = portfolioData.skills;

  return (
    <section className="section section-alternate" id="skills">
      <div className="container">
        {/* Section title */}
        <h2 className="section-title">My Skills</h2>
        
        {/* Skills grid */}
        <div className="skills-grid">
          {/* Map through each skill category */}
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              {/* Category name (e.g., "Frontend Development") */}
              <h3>{category.name}</h3>
              
              {/* Skills list within this category */}
              <ul className="skill-list">
                {/* Map through each skill in the category */}
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {/* Skill name and percentage */}
                    <div className="skill-name">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="skill-bar">
                      {/* Progress fill - width is set dynamically based on skill level */}
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;