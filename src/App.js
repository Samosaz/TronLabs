import './App.css';
import React, { Component } from 'react';
import Navbar from './Nav';
import Background from './Background';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
