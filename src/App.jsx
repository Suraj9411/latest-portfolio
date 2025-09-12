import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 });
  const { ref: certificationsRef, inView: certificationsInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (heroInView) setActiveSection('home');
    else if (aboutInView) setActiveSection('about');
    else if (projectsInView) setActiveSection('projects');
    else if (skillsInView) setActiveSection('skills');
    else if (certificationsInView) setActiveSection('certifications');
    else if (contactInView) setActiveSection('contact');
  }, [heroInView, aboutInView, projectsInView, skillsInView, certificationsInView, contactInView]);

  return (
    <div className="bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#45a29e] min-h-screen">
      <Navigation activeSection={activeSection} />
      
      <div ref={heroRef} id="home">
        <Hero />
      </div>
      
      <div ref={aboutRef} id="about">
        <About />
      </div>
      
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      
      <div ref={certificationsRef} id="certifications">
        <Certifications />
      </div>
      
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}