import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Nav';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import './App.css';
import Footer from './Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link, animateScroll as scroll, Events } from 'react-scroll';
import rocket from './rocket.png';
import Test from './Test'

const useParallaxScroll = (parallaxRef) => {
  const [scroll, setScroll] = React.useState(0);
  React.useEffect(() => {
    if (parallaxRef.current) {
      parallaxRef.current.onScroll((state) => {
        setScroll(state.current);
      });
    }
  }, [parallaxRef]);
  return scroll;
};

const App = () => {
  const parallaxRef = React.useRef();
  const scrollValue = useParallaxScroll(parallaxRef);

  // Calculate the rotation using the scroll value
  const rotation = -180 + (scrollValue * 360);
  return (
    <div className="App">
      
      <Parallax pages={3} speed={1}>
      <ParallaxLayer sticky={{start: 0, end: 2}}>
          <img 
            src={rocket} 
            style={{
              width: '200px', 
              height: 'auto',
              position: 'sticky',
              right: '50px',
              transform: `rotate(${rotation}deg)`
            }}
          />
        </ParallaxLayer>
        <Navbar
          scrollToAbout={() => scroll.scrollTo(window.innerHeight)}
          scrollToProjects={() => scroll.scrollTo(2 * window.innerHeight)}
        />
        <div className='background'>
          <ParallaxLayer offset={0}>
            <div className='moon'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0}>
            <div className="mountain-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0}>
            <div className="sky-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <div className="space-layer" />
          </ParallaxLayer>
        </div>
        <div className='foreground'>
          <ParallaxLayer offset={0} speed={0}>
            <div className="moonsurfContainer">
              <div className="moonsurf" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <div className='moonmount'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <div className='moon'></div>
          </ParallaxLayer>
        </div>
        <div className='content'>
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