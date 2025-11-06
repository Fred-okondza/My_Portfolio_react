/**
 * CONTACT COMPONENT
 * 
 * Displays contact information and a contact form.
 * Left side shows contact methods, right side has the form.
 * Contact data comes from portfolioData.js
 */

import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';

function Contact() {
  // Get contact data
  const { contact } = portfolioData;
  
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Add your form submission logic here
    // For now, just log the data and show an alert
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (Note: Form submission is not yet connected to a backend)');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="section section-alternate" id="contact">
      <div className="container">
        {/* Section title */}
        <h2 className="section-title">{contact.title}</h2>
        
        {/* Description */}
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          {contact.description}
        </p>
        
        <div className="contact-container">
          {/* Left side - Contact information */}
          <div className="contact-info">
            {contact.methods.map((method, index) => (
              <div key={index} className="contact-item">
                {/* Contact icon */}
                <div className="contact-icon">{method.icon}</div>
                
                {/* Contact details */}
                <div className="contact-details">
                  <h4>{method.title}</h4>
                  {method.link ? (
                    <a href={method.link}>{method.value}</a>
                  ) : (
                    <p>{method.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - Contact form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Fred Okondza"
                required
              />
            </div>
            
            {/* Email input */}
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="fred.okondza@aims-cameroon.org"
                required
              />
            </div>
            
            {/* Message textarea */}
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            
            {/* Submit button */}
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;