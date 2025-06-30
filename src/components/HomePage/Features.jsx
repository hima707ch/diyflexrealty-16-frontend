import React from 'react';
import images from '../assets/images';

const Features = () => {
  return (
    <div id="Features_1" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-500">Everything you need to find and secure your dream property</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: 'Features_2',
              title: 'Property Search',
              description: 'Advanced search tools to find exactly what you re looking for',
              image: images[2] || 'https://via.placeholder.com/300x200'
            },
            {
              id: 'Features_3',
              title: 'Virtual Tours',
              description: 'Explore properties from the comfort of your home',
              image: images[3] || 'https://via.placeholder.com/300x200'
            },
            {
              id: 'Features_4',
              title: 'Expert Guidance',
              description: 'Professional advice throughout your property journey',
              image: images[4] || 'https://via.placeholder.com/300x200'
            }
          ].map((feature) => (
            <div key={feature.id} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={feature.image} alt={feature.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
