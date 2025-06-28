import { useState, useEffect } from 'react';

const useHome = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const response = await fetch('/api/properties/search');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setFeaturedProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProperties();
  }, []);

  const handleContactSubmit = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit');
      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    featuredProperties,
    loading,
    error,
    handleContactSubmit,
  };
};

export default useHome;