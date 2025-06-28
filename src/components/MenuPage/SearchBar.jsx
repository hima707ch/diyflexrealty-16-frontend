import React from 'react';
import images from '../assets/images';

const SearchBar = ({ onSearch, searchQuery }) => {
  return (
    <div id="SearchBar_1" className="w-full md:w-1/2">
      <div className="relative">
        <input
          type="text"
          id="SearchBar_2"
          placeholder="Search menu items..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          id="SearchBar_3"
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
