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
  payload: CompleteUserProfilePayload
) => {
  const response = await api.post('/user/resister', payload);
  return response.data;
};
