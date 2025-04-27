import api from './api';
import { DocRegisterParams } from '@/types/doc';

export const getUserInfo = async () => {
  const response = await api.get('/user/profile');
  return response.data;
};

//산재 신청
export const createDocRegister = async (payload: DocRegisterParams) => {
  try {
    const response = await api.post('/document/new', payload);
    return response.data;
  } catch (error) {
    console.error('createDocRegister 에러:', error);
    throw error;
  }
};

//신청한 산재 리스트
export const getDocList = async () => {
  const response = await api.get('/document/list');
  return response.data;
};

//산재 처리여부
export const patchDocStatus = async ({
  documentId,
  docWhether,
}: {
  documentId: number;
  docWhether: boolean;
}) => {
  const response = await api.patch(`document/status/${documentId}`, {
    docWhether,
  });
  return response.data;
};
