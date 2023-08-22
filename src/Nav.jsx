import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Tron Labs</a>
      </div>
      <div className="nav-links">
        <a onClick={scrollToAbout}>About</a>
        <a onClick={scrollToProjects}>Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;