
import React, { useState, useEffect } from 'react';
import Navbar from './Nav';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import './App.css';
import { useSpring, animated } from '@react-spring/web';
import Footer from './Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import rocket from './rocket.png';

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const specificPage = 1; // Adjust this value to the page you want to trigger the rotation
  const { rotation } = useSpring({
    rotation: offsetY >= specificPage ? 0 : 180
  });

  const handleScroll = (state) => {
    setOffsetY(state.scroll);
  };

  return (
    <div className="App">
      <Parallax pages={3} speed={1} onScroll={handleScroll}>

        {/*<ParallaxLayer z={1} sticky={{ start: 0, end: 2 }}>
          <animated.div 
            style={{
              position: 'sticky',
              display: 'flex',
            }}>
            <img 
              src={rocket} 
              style={{
                height: '300px', 
                width: 'auto',
                transform: rotation.to(r => `rotate(${r}deg)`),
                transformOrigin: 'center center',
                marginTop: '200px',
                marginLeft: '500px',
                zIndex: '2'
              }} 
            />
          </animated.div>
            </ParallaxLayer>*/}

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

        {/* Navbar with a higher z-index */}
        <ParallaxLayer z={3}>
          <Navbar
            scrollToAbout={() => window.scroll(window.innerHeight)}
            scrollToProjects={() => window.scroll(2 * window.innerHeight)}
          />
        </ParallaxLayer>

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
          <ParallaxLayer z={2} offset={1} factor={1} speed={0.8}>
            <AboutSection />
          </ParallaxLayer>
          <ParallaxLayer z={2} offset={2} factor={1} speed={0.7}>
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


