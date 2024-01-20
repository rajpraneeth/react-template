// apiService.js
import { toast } from 'react-toastify';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL


const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    toast.error(error.message || 'Something went wrong');
    throw new Error(error.message || 'Something went wrong');
  }

  return response.json();
};

const request = async (endpoint, method, data = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  return handleResponse(response);
};

const apiService = {
  get: async (endpoint) => request(endpoint, 'GET'),

  post: async (endpoint, data) => request(endpoint, 'POST', data),

  delete: async (endpoint) => request(endpoint, 'DELETE'),
};

export default apiService;
