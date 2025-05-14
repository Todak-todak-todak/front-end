import axios from 'axios';
import { translateResponse } from '@/utils/translateResponse';

const chatApi = axios.create({
  baseURL: 'https://todak-chatbot.store/api/v1',
});

chatApi.interceptors.response.use(
  async (response) => {
    const isJson =
      response.headers['content-type']?.includes('application/json');
    const shouldTranslate =
      ['get', 'post'].includes(response.config.method ?? '') && isJson;

    if (shouldTranslate) {
      response.data = await translateResponse(response.data);
    }

    return response;
  },
  (error) => Promise.reject(error)
);

export default chatApi;
