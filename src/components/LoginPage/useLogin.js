import { useState } from 'react';

const useLogin = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (credentials) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      setSuccess(true);
      
      // Redirect or handle successful login
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    error,
    loading,
    success
  };
};

export default useLogin;