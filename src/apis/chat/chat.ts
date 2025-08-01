import chatApi from './chatApi';

export const sendMessage = async ({
  question,
  accessToken,
}: {
  question: string;
  accessToken: string;
}) => {
  const response = await chatApi.post(
    '/chat/message/new',
    { question },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};
