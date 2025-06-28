import React from 'react';
import ReservationForm from './ReservationForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-4xl mx-auto" id="Body_2">
        <div className="text-center mb-12" id="Body_3">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" id="Body_4">Make a Reservation</h1>
          <p className="text-lg text-gray-600" id="Body_5">Book your table at our restaurant and enjoy a wonderful dining experience</p>
        </div>
        <ReservationForm />
      </div>
    </div>
  );
};

export default Body;
