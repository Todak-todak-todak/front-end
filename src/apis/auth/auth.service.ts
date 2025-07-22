import api from '../api';
import { LogoutUserResponse } from './auth.schema';

export const authService = {
  // 로그아웃
  logoutUser: async (): Promise<LogoutUserResponse> => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};
