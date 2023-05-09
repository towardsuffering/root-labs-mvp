import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShoppingCart = () => {
  const [catPhotoUrl, setCatPhotoUrl] = useState('');

  useEffect(() => {
    const fetchCatPhoto = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
          headers: {
            'x-api-key': 'live_RzY8pyTzGbBd4WSRarUApOuGSPwHJ7MqT3fJnd6KUDtD3SszTmLJA5AxmAnc5BTL',
          },
        });
        setCatPhotoUrl(response.data[0].url);
      } catch (error) {
        console.log('Error fetching cat photo:', error);
      }
    };

    fetchCatPhoto();
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {catPhotoUrl && <img src={catPhotoUrl} alt="Random Cat" style={{ width: '300px' }} />}
    </div>
  );
};

export default ShoppingCart;
