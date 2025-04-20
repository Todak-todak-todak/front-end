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

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const errorCode = error.response?.data?.error?.errorCode;

    if (
      error.response?.status === 406 &&
      errorCode === 'EXPIRED_TOKEN' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');

        const res = await axios.post(
          'https://todak-back-end.store/api/v1/auth/refresh',
          {},
          {
            headers: {
              'Refresh-Token': refreshToken,
              'Content-Type': 'application/json',
            },
          }
        );

        const newAccessToken = res.data.data.accessToken;
        const newRefreshToken = res.data.data.refreshToken;

        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
        window.location.href = '/';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
