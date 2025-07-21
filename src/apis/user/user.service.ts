import api from '../api';
import {
  CompleteUserProfilePayload,
  GetUserProfileResponse,
} from './user.schema';

export const userService = {
  // 추가 정보 기입
  completeUserProfile: async (payload: CompleteUserProfilePayload) => {
    const response = await api.post('/user/register', payload);
    return response.data;
  },

  // 내 정보 불러오기
  fetchUserProfile: async (): Promise<GetUserProfileResponse> => {
    const response = await api.get('/user/profile');
    return response.data;
  },

  // 내 정보 수정하기
  updateUserProfile: async (
    updateData: Partial<CompleteUserProfilePayload>
  ) => {
    const response = await api.put('/user/profile/update', updateData);
    return response.data;
  },
};
