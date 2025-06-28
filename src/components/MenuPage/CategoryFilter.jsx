import React from 'react';
import images from '../assets/images';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];

  return (
    <div id="CategoryFilter_1" className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <button
          key={category}
          id={`CategoryFilter_${index + 2}`}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full ${selectedCategory === category
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
