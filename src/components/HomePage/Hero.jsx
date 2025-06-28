import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 pt-16 pb-32">
      <div className="absolute inset-0">
        <svg className="absolute right-0 top-0 opacity-10" width="404" height="404" fill="none">
          <defs>
            <pattern id="Hero_pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#Hero_pattern)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 id="Hero_2">
              <span className="block text-sm font-semibold text-indigo-600 tracking-wide uppercase">Your Dream Home</span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Find Your Perfect</span>
                <span className="block animate-bounce mt-3">Property</span>
              </span>
            </h1>
            <p id="Hero_3" className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Discover your dream home with our extensive collection of properties. From cozy apartments to luxury villas, we have something for everyone.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Start Searching
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img className="w-full rounded-lg transform transition-transform hover:scale-105" src={images[0] || 'https://via.placeholder.com/600x400'} alt="Home" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;