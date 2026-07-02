import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = (filters) => {
  const params = new URLSearchParams(filters);
  return axios.get(`${API_URL}?${params}`).then((res) => res.data);
};

export const fetchFilterOptions = () =>
  axios.get(`${API_URL}/filters`).then((res) => res.data);