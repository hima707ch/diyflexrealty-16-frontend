import React from 'react';
import DeliveryOptions from './DeliveryOptions';
import OrderTracking from './OrderTracking';
import useDelivery from './useDelivery';
import images from '../assets/images';

const Body = () => {
  const { deliveryOptions, selectedOption, orderStatus, handleOptionSelect, handleOrderTrack } = useDelivery();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Delivery Services</h1>
      <div id="Body_3" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DeliveryOptions
          options={deliveryOptions}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
        />
        <OrderTracking
          orderStatus={orderStatus}
          onTrackOrder={handleOrderTrack}
        />
      </div>
    </div>
  );
};

export default Body;