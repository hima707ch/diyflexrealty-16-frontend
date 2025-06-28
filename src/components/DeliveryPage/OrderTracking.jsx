import React, { useState } from 'react';
import images from '../assets/images';

const OrderTracking = ({ orderStatus, onTrackOrder }) => {
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTrackOrder(orderId);
  };

  return (
    <div id="OrderTracking_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="OrderTracking_2" className="text-2xl font-semibold mb-6">Track Your Order</h2>
      <form id="OrderTracking_3" onSubmit={handleSubmit} className="mb-6">
        <div id="OrderTracking_4" className="flex space-x-4">
          <input
            type="text"
            id="OrderTracking_5"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            id="OrderTracking_6"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Track
          </button>
        </div>
      </form>
      
      {orderStatus && (
        <div id="OrderTracking_7" className="space-y-4">
          <div id="OrderTracking_8" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div id="OrderTracking_9" className="flex items-center space-x-4">
              <div id="OrderTracking_10" className="w-3 h-3 rounded-full bg-green-500"></div>
              <span id="OrderTracking_11" className="font-medium">Status: {orderStatus.status}</span>
            </div>
            <span id="OrderTracking_12" className="text-sm text-gray-600">{orderStatus.lastUpdate}</span>
          </div>
          
          <div id="OrderTracking_13" className="relative pt-8">
            {orderStatus.timeline.map((event, index) => (
              <div
                key={index}
                id={`OrderTracking_14_${index}`}
                className="flex items-start mb-6"
              >
                <div id={`OrderTracking_15_${index}`} className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full shrink-0">
                  <span className="text-white text-sm">{index + 1}</span>
                </div>
                <div id={`OrderTracking_16_${index}`} className="ml-4">
                  <h4 id={`OrderTracking_17_${index}`} className="font-medium">{event.title}</h4>
                  <p id={`OrderTracking_18_${index}`} className="text-sm text-gray-600">{event.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;