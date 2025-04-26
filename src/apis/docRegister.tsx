import api from './api';
import { DocRegisterParams } from '@/types/doc';

export const getUserInfo = async () => {
  const response = await api.get('/user/profile');
  return response.data;
};

export const createDocRegister = async (payload: DocRegisterParams) => {
  const response = await api.post('/document/new', payload);
  return response.data;
};
