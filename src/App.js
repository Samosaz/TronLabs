import './App.css';
import React from 'react';
import Navbar from './Nav';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import spacebg from './spacebg.jpg';
import Background from './Background';

const App = () => {
  return (
    <div className="App">
      <Background />
      <Parallax pages={2} speed={1}>
        <ParallaxLayer stick={{start: 0, end: 1}}>
          <Navbar />
        </ParallaxLayer>
        <div className='content'>
            
          <ParallaxLayer offset={0.3} factor={1.5} speed={0.8}>
            <AboutSection />
          </ParallaxLayer>
          <ParallaxLayer offset={window.innerWidth < 800 ? 0.7 : 1} speed={0.7}>
            <ProjectsSection />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <Footer />
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
