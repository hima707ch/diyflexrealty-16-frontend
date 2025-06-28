import { useState, useEffect } from 'react';

const useEventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleEventRegister = async (eventId) => {
    try {
      const response = await fetch('/api/events/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId }),
      });

      if (!response.ok) throw new Error('Failed to register for event');
      
      const data = await response.json();
      alert('Successfully registered for event!');
    } catch (err) {
      alert('Failed to register for event: ' + err.message);
    }
  };

  return {
    events,
    selectedEvent,
    loading,
    error,
    handleEventSelect,
    handleEventRegister
  };
};

export default useEventPage;