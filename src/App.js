import './App.css';
import React, { Component } from 'react';
import Navbar from './Nav';
import Background from './Background';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';


function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <AboutSection id="about"/>
      <ProjectsSection id="projects" />
    </div>
  );
}

export default App;
