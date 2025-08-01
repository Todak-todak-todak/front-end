import api from '../api';
import { DocRegisterParams } from '@/types/doc';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { DocListResponse } from '@/types/doc';

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
export const useCreateDocRegister = (
  setStep: React.Dispatch<React.SetStateAction<number>>
) => {
  return useMutation({
    mutationFn: createDocRegister,
    onSuccess: () => {
      setStep(5);
    },
    onError: (error) => {
      console.error('문서 생성 실패:', error);
    },
  });
};

//신청한 산재 리스트
export const getDocList = async () => {
  const response = await api.get('/document/list');
  return response.data;
};
export const useGetDocList = () => {
  return useQuery<DocListResponse>({
    queryKey: ['docList'],
    queryFn: getDocList,
  });
};

//산재 처리여부
export const patchDocStatus = async ({
  documentId,
}: {
  documentId: number;
}) => {
  const response = await api.patch(`document/status/${documentId}`);
  return response.data;
};
export const usePatchDocStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchDocStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['docList'] });
    },
  });
};

//
export const getDocDetail = async (documentId: string) => {
  const response = await api.get(`/document/detail/${documentId}`);
  console.log(response.data);
  return response.data;
};
