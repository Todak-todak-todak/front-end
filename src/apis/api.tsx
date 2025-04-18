import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todak-back-end.store/api/v1',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token.trim()}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default api;
