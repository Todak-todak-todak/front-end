import api from './api';

interface CompleteUserProfilePayload {
  userName: string;
  userRegisterNm: string;
  userPhoneNm: string;
  userGender: string;
  userLanguage: string;
  userAddress: string;
  industryName: string;
}

export const completeUserProfile = async (
  // 추가 정보 기입
  payload: CompleteUserProfilePayload
) => {
  const response = await api.post('/user/register', payload);
  return response.data;
};

export const getUserProfile = async () => {
  // 마이페이지 내 정보 불러오기
  const response = await api.get('/user/profile');
  return response.data;
};
