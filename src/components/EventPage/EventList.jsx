import React from 'react';
import images from '../assets/images';

const EventList = ({ events, onEventSelect }) => {
  return (
    <div id="EventList_1" className="space-y-4">
      {events.map((event, index) => (
        <div 
          key={event.id} 
          id={`EventList_${index + 2}`}
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onEventSelect(event)}
        >
          <img 
            src={images[index % images.length]} 
            alt={event.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-600 mb-2">{event.date}</p>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {event.category}
            </span>
            {event.isPopular && (
              <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                Popular
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;