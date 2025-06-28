import React from 'react';
import images from '../assets/images';

const About = () => {
  return (
    <div id="About_1" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 id="About_2" className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Why Choose Us?
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              With over 15 years of experience in real estate, we've helped thousands of people find their perfect home. Our commitment to excellence and customer satisfaction sets us apart.
            </p>
            <dl className="mt-10 space-y-10">
              {[
                {
                  id: 'About_3',
                  name: 'Trusted Expertise',
                  description: 'Our team of experienced professionals ensures you get the best service.',
                },
                {
                  id: 'About_4',
                  name: 'Wide Selection',
                  description: 'Access to thousands of properties across different locations and price ranges.',
                },
                {
                  id: 'About_5',
                  name: 'Personalized Service',
                  description: 'We understand your needs and provide tailored solutions just for you.',
                },
              ].map((feature) => (
                <div key={feature.id} className="relative">
                  <dt>
                    <p className="text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-10 -mx-4 relative lg:mt-0">
            <img className="relative mx-auto rounded-lg shadow-lg" src={images[1] || 'https://via.placeholder.com/500x500'} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;