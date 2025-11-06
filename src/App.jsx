/**
 * MAIN APP COMPONENT
 * 
 * Root component that combines all sections of the portfolio.
 * Compatible with Vite + React.
 * All data can still be imported from portfolioData.js if needed.
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Fixed navigation bar */}
      <Navbar />

      {/* Landing section */}
      <Hero />

      {/* About me section */}
      <About />

      {/* Skills showcase */}
      <Skills />

      {/* Projects portfolio */}
      <Projects />

      {/* Work experience timeline */}
      <Experience />

      {/* Education background */}
      <Education />

      {/* Contact form and information */}
      <Contact />

      {/* Footer with social links */}
      <Footer />
    </div>
  );
}

export default App;
