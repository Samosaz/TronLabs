import React, { useRef } from 'react';
import Navbar from './Nav';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import './App.css';
import Footer from './Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App = () => {
  const parallaxRef = useRef();

  const scrollToAbout = () => {
    parallaxRef.current.scrollTo(1);
  };

  const scrollToProjects = () => {
    parallaxRef.current.scrollTo(2);
  };

  return (
    <div className="App">
      <Parallax pages={3} ref={parallaxRef} speed={1}>
        <div className='background'>
        <ParallaxLayer offset={0}>
            <div className='moon'></div>
          </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="space-layer" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <div className="sky-layer" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div className="mountain-layer" />
        </ParallaxLayer>
        </div>
        <div className='foreground'>
        <ParallaxLayer offset={0} speed={0}>
          <div className="moon" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <div className="stars"></div>
        </ParallaxLayer>

        </div>
        <div className='content'>
          <Navbar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} />
          <ParallaxLayer offset={1} factor={1} speed={0.8}>
            <AboutSection />
          </ParallaxLayer>
          <ParallaxLayer offset={2} factor={1} speed={0.7}>
            <ProjectsSection />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <Footer />
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
