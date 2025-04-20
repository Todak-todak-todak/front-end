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

// 리프레쉬 토큰
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = localStorage.getItem('refreshToken');
//         const res = await axios.post(
//           'https://todak-back-end.store/api/v1/auth/refresh',
//           {
//             refreshToken,
//           }
//         );

//         const newAccessToken = res.data.accessToken;
//         localStorage.setItem('accessToken', newAccessToken);

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error('토큰 재발급 실패:', refreshError);
//         window.location.href = '/login';
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
