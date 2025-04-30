import api from './api';

//정보 get
export const getInfomation = async () => {
  try {
    const response = await api.get('/home');
    return response.data.data;
  } catch (error) {
    console.error('에러', error);
    throw error;
  }
};

//상담
export const getCounsel = async () => {
  const response = await api.get('/counselor/list');
  return response.data.data;
};

//신고
export const getDeclaration = async () => {
  const response = await api.get('/declaration/list');
  return response.data.data;
};
