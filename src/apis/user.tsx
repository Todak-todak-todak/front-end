import api from './api';
import { useQuery, useMutation } from '@tanstack/react-query';

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

// export const getUserProfile = async () => {
//   // 마이페이지 내 정보 불러오기
//   const response = await api.get('/user/profile');
//   return response.data;
// };

// export const editUserProfile = async (
//   updateData: Partial<CompleteUserProfilePayload>
// ) => {
//   // 마이페이지 내 정보 수정하기
//   const response = await api.put('/user/profile/update', updateData);
//   console.log(response);
//   return response.data;
// };

const fetchUserProfile = async () => {
  // 내 정보 불러오기 api 함수
  const response = await api.get('/user/profile');
  return response.data;
};

const updateUserProfile = async (
  updateData: Partial<CompleteUserProfilePayload>
) => {
  // 내 정보 수정하기 api 함수
  const response = await api.put('/user/profile/update', updateData);
  return response.data;
};

export const useGetUserProfile = () => {
  // 내 정보 불러오기 react-query
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
  });
};

export const useEditUserProfile = () => {
  // 내 정보 수정하기 react-query
  return useMutation({
    mutationFn: updateUserProfile,
  });
};
