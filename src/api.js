import axios from "axios";

const API_URL = 'http://localhost:8000';

export const getSales = (sales = {}) => {
  return axios.get(`${API_URL}/sales`, { sales });
};