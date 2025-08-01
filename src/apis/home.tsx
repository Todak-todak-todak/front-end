import api from './api';
import { useQuery } from '@tanstack/react-query';

//정보
export const getInfomation = async () => {
  try {
    const response = await api.get('/home');
    return response.data.data;
  } catch (error) {
    console.error('에러', error);
    throw error;
  }
};
export const useGetInfomation = () => {
  return useQuery({
    queryKey: ['information'],
    queryFn: getInfomation,
  });
};

//상담
export const getCounsel = async () => {
  const response = await api.get('/counselor/list');
  return response.data.data;
};
export const useGetCounsel = () => {
  return useQuery({
    queryKey: ['counsel'],
    queryFn: getCounsel,
  });
};

//신고
export const getDeclaration = async () => {
  const response = await api.get('/declaration/list');
  return response.data.data;
};
export const useGetDeclaration = () => {
  return useQuery({
    queryKey: ['declaration'],
    queryFn: getCounsel,
  });
};
