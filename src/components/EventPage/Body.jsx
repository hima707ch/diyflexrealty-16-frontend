import React from 'react';
import EventList from './EventList';
import EventDetails from './EventDetails';
import useEventPage from './useEventPage';
import images from '../assets/images';

const Body = () => {
  const { events, selectedEvent, loading, error, handleEventSelect, handleEventRegister } = useEventPage();

  if (loading) return <div id="Body_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
      <div id="Body_5" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EventList events={events} onEventSelect={handleEventSelect} />
        {selectedEvent && (
          <EventDetails 
            event={selectedEvent} 
            onRegister={handleEventRegister} 
          />
        )}
      </div>
    </div>
  );
};

export default Body;