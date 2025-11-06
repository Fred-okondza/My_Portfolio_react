/**
 * EXPERIENCE COMPONENT
 * 
 * Displays work experience in a vertical timeline format.
 * Shows job positions, companies, dates, and responsibilities.
 * Experience data comes from portfolioData.js
 */

import React from 'react';
import portfolioData from '../data/portfolioData';

function Experience() {
  // Get experience data
  const { experience } = portfolioData;

  return (
    <section className="section section-alternate" id="experience">
      <div className="container">
        {/* Section title */}
        <h2 className="section-title">Work Experience</h2>
        
        {/* Timeline container */}
        <div className="timeline">
          {/* Map through each experience item */}
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              {/* Date range */}
              <div className="timeline-date">
                {item.startDate} - {item.current ? 'Present' : item.endDate}
              </div>
              
              {/* Job position */}
              <h3 className="timeline-title">{item.position}</h3>
              
              {/* Company name and location */}
              <p className="timeline-company">
                {item.company} • {item.location}
              </p>
              
              {/* Job responsibilities */}
              <div className="timeline-description">
                <ul>
                  {item.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;