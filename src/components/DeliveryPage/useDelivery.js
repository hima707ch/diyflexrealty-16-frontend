import { useState, useEffect } from 'react';

const useDelivery = () => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    fetchDeliveryOptions();
  }, []);

  const fetchDeliveryOptions = async () => {
    try {
      const response = await fetch('/api/delivery/options');
      const data = await response.json();
      setDeliveryOptions(data);
    } catch (error) {
      console.error('Error fetching delivery options:', error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleOrderTrack = async (orderId) => {
    try {
      const response = await fetch(`/api/delivery/track/${orderId}`);
      const data = await response.json();
      setOrderStatus(data);
    } catch (error) {
      console.error('Error tracking order:', error);
    }
  };

  return {
    deliveryOptions,
    selectedOption,
    orderStatus,
    handleOptionSelect,
    handleOrderTrack
  };
};

export default useDelivery;