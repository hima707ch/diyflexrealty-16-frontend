import React from 'react';
import LoginForm from './LoginForm';
import useLogin from './useLogin';
import images from '../assets/images';

const Body = () => {
  const { handleLogin, error, loading, success } = useLogin();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div id="Body_3" className="text-center">
          <img
            id="Body_4"
            className="mx-auto h-12 w-auto"
            src={images[0]}
            alt="Logo"
          />
          <h2 id="Body_5" className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <LoginForm onSubmit={handleLogin} />
        {error && (
          <div id="Body_6" className="mt-4 text-center text-red-600">
            {error}
          </div>
        )}
        {success && (
          <div id="Body_7" className="mt-4 text-center text-green-600">
            Login successful!
          </div>
        )}
        <div id="Body_8" className="text-center mt-4">
          <a
            id="Body_9"
            href="/forgot-password"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;