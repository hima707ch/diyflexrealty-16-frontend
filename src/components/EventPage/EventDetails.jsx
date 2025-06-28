import React from 'react';
import images from '../assets/images';

const EventDetails = ({ event, onRegister }) => {
  return (
    <div id="EventDetails_1" className="bg-white rounded-lg shadow-md p-6">
      <img 
        src={images[0]} 
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 id="EventDetails_2" className="text-2xl font-bold mb-4">{event.title}</h2>
      <div id="EventDetails_3" className="space-y-4 mb-6">
        <p className="text-gray-600"><span className="font-semibold">Date:</span> {event.date}</p>
        <p className="text-gray-600"><span className="font-semibold">Time:</span> {event.time}</p>
        <p className="text-gray-600"><span className="font-semibold">Location:</span> {event.location}</p>
        <p className="text-gray-600"><span className="font-semibold">Price:</span> ${event.price}</p>
      </div>
      <div id="EventDetails_4" className="prose max-w-none mb-6">
        <p>{event.description}</p>
      </div>
      <button
        id="EventDetails_5"
        onClick={() => onRegister(event.id)}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Register for Event
      </button>
    </div>
  );
};

export default EventDetails;