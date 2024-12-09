// src/axiosConfig.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://fit-fusion-app-f7f9c3528528.herokuapp.com', // Base URL for all requests
  timeout: 10000, // Optional: Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Default headers
  },
});

export default axiosInstance;
