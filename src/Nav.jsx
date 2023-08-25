import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = ({ scrollToAbout, scrollToProjects }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a className="glow" href="/" data-text="Tron Labs">
          Tron Labs
        </a>
      </div>
      <div className="nav-links">
        <a onClick={scrollToAbout} data-text="About">
          About
        </a>
        <a onClick={scrollToProjects} data-text="Projects">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
