import { useQuery } from '@tanstack/react-query';
import api from './api';
import { useMutation } from '@tanstack/react-query';

export interface ChatReportBody {
  industry: string;
  relatedIndustryExamples: string[];
  reportProbability: string;
}

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

export const postChatReport = async (body: ChatReportBody) => {
  const response = await api.post('/chat/new', body);
  return response.data;
};

export const usePostChatReport = () =>
  useMutation({
    mutationFn: postChatReport,
  });
