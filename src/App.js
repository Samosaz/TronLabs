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
      <div className='content'>
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
