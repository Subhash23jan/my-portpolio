import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import TechLife from './components/TechLife';
import Contact from './components/Contact';

function App() {

  useEffect(() => {
    document.title='Subhash-Portpolio'
  });
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <TechLife />
      <Contact />
    </div>
  );
}

export default App;