import axios from 'axios';

const API_URL = 'https://todak-chatbot.store/api/v1/chat/message/new';

export const sendMessage = async ({
  question,
  accessToken,
}: {
  question: string;
  accessToken: string;
}) => {
  const response = await axios.post(
    API_URL,
    { question },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};
