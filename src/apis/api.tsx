import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todak-back-end.store/api/v1',
  withCredentials: true,
});

export default api;
