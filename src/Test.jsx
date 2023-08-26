import React, { useEffect, useState } from 'react';
import rocket from './rocket.png'

const TestRocket = () => {
    const [rotation, setRotation] = useState(-180);
  
    useEffect(() => {
      const handleScroll = () => {
        const rotationValue = -180 + (window.scrollY / (window.innerHeight * 3) * 360);
        setRotation(rotationValue);
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <div 
          style={{
            width: '200px', 
            height: '200px',  // Assuming the height, adjust as needed
            position: 'fixed',
            bottom: '10px',
            right: '50px',
            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'center center',
            zIndex: '10'
          }}
        >
          <img src={rocket} alt="rocket" style={{ width: '100%', height: 'auto' }} />
        </div>
      );
    }

export default TestRocket;