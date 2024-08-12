// src/api/bannerService.js
import axios from 'axios';

const API_URL = 'https://backend-banner.onrender.com/api'; 

export const getBanner = async () => {
  try {
    const response = await axios.get(`${API_URL}/banner`);
    return response.data;
  } catch (error) {
    console.error('Error fetching banner data:', error);
    throw error;
  }
};

export const updateBanner = async (bannerData) => {
  try {
    const response = await axios.post(`${API_URL}/update-banner`, bannerData);
    return response.data;
  } catch (error) {
    console.error('Error updating banner:', error);
    throw error;
  }
};
