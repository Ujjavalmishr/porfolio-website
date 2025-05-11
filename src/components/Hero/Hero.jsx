import React from 'react';
import './Hero.css';
import photod from '../../assets/photod.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const setMenu = (menuItem) => {
    // Add your menu state logic here if needed
    console.log(`Menu set to: ${menuItem}`);
  };

  return (
    <div id='home' className='hero'>
      <img src={photod} alt="Profile" />
      <h1>
        <span>I'm Ujjaval Mishra</span>, Frontend developer based in India.
      </h1>
      <p>
        I'm pursuing Btech in (CSE-AI) from ABES Institute Of Technology, Ghaziabad.
      </p>

      <div className="hero-action">
        <AnchorLink
          className="hero-connect"
          offset={50}
          href="#contact"
          onClick={() => setMenu("contact")}
        >
          Connect with me
        </AnchorLink>

        <a
          className="hero-resume"
          href="/1Ujjaval_resume_2025.pdf"  // Update with actual file path
          target="_blank"
          rel="noopener noreferrer"
        >
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
