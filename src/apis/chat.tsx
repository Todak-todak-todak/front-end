import { useQuery } from '@tanstack/react-query';
import api from './api';

export const getChatList = async () => {
  const response = await api.get('report/list');
  return response.data.data;
};

export const useGetChatList = () => {
  return useQuery({
    queryKey: ['chatList'],
    queryFn: getChatList,
  });
};
