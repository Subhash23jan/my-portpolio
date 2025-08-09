import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Education from './components/Education';
import TechLife from './components/TechLife';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = 'Subhash-Portfolio';
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <CompetitiveProgramming />
      <Experience />
      <Projects />
      <TechLife />
      <Education />
      <Contact />
    </div>
  );
}

export default App;