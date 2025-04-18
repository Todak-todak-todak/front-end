import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todak-back-end.store/api/v1',
  withCredentials: true, // 쿠키 필요 시 유지
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default api;
