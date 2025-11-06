/**
 * EDUCATION COMPONENT
 * 
 * Displays educational background in card format.
 * Shows degrees, institutions, dates, and achievements.
 * Education data comes from portfolioData.js
 */

import React from 'react';
import portfolioData from '../data/portfolioData';

function Education() {
  // Get education data
  const { education } = portfolioData;

  return (
    <section className="section" id="education">
      <div className="container">
        {/* Section title */}
        <h2 className="section-title">Education</h2>
        
        {/* Education grid */}
        <div className="education-grid">
          {/* Map through each education item */}
          {education.map((item) => (
            <div key={item.id} className="education-card">
              {/* Institution name */}
              <h3>{item.institution}</h3>
              
              {/* Degree name */}
              <p className="degree">{item.degree}</p>
              
              {/* Date range */}
              <p className="education-date">
                {item.startDate} - {item.endDate}
                {item.gpa && ` • GPA: ${item.gpa}`}
              </p>
              
              {/* Description */}
              <p>{item.description}</p>
              
              {/* Achievements (if any) */}
              {item.achievements && item.achievements.length > 0 && (
                <ul style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                  {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;