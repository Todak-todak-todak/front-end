import api from './api';

export const getResult = async () => {
  const response = await api.get('/chat/3'); //나중에 {chatResultId} 들어가야함. 임시 매핑
  return response.data;
};
