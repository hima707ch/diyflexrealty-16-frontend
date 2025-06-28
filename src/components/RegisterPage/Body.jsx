import React from 'react';
import RegistrationForm from './RegistrationForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div id="Body_2" className="sm:mx-auto sm:w-full sm:max-w-md">
        <img id="Body_3" className="mx-auto h-12 w-auto" src={images[0]} alt="Logo" />
        <h2 id="Body_4" className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default Body;