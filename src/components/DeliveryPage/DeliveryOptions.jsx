import React from 'react';
import images from '../assets/images';

const DeliveryOptions = ({ options, selectedOption, onOptionSelect }) => {
  return (
    <div id="DeliveryOptions_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="DeliveryOptions_2" className="text-2xl font-semibold mb-6">Delivery Options</h2>
      <div id="DeliveryOptions_3" className="space-y-4">
        {options.map((option, index) => (
          <div
            key={option.id}
            id={`DeliveryOptions_4_${index}`}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedOption?.id === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
            onClick={() => onOptionSelect(option)}
          >
            <div id={`DeliveryOptions_5_${index}`} className="flex items-center justify-between">
              <div id={`DeliveryOptions_6_${index}`} className="flex items-center space-x-4">
                <img
                  src={images[index % images.length]}
                  alt={option.name}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 id={`DeliveryOptions_7_${index}`} className="font-medium">{option.name}</h3>
                  <p id={`DeliveryOptions_8_${index}`} className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
              <span id={`DeliveryOptions_9_${index}`} className="font-bold text-blue-600">${option.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryOptions;