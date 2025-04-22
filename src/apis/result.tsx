import api from './api';

export const getResult = async () => {
  // 분석결과 초기 페이지 api
  const response = await api.get('/chat/3'); //나중에 {chatResultId} 들어가야함. 임시 매핑
  return response.data;
};

export const getAddress = async () => {
  // 유저 주소만 불러오기 api
  const response = await api.get('/user/address');
  return response.data;
};
