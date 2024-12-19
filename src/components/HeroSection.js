import React from "react";
import '../index.css';
import exampleImage from '../assets/images/hero.jpeg';
import heroVideoDesktop from '../assets/videos/hero-video-desktop.mp4';




const HeroSection = () => {
  return (
    <section className="hero-section text-center bg-dark text-white">
      
      <video autoPlay loop muted className="hero-video-desktop">
        <source src={heroVideoDesktop} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


    </section>
    
  );
};

export default HeroSection;
