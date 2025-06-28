import React from 'react';
import images from '../assets/images';

const MenuList = ({ items }) => {
  return (
    <div id="MenuList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          id={`MenuList_${index + 2}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={images[index % images.length]}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">${item.price}</span>
              <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">{item.category}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
