import React from 'react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import CallToAction from './CallToAction';
import Footer from './Footer';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <About />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;