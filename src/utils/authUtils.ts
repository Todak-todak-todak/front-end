export const getAccessToken = (): string => {
  const token = localStorage.getItem('access_token');
  if (token) {
    return token;
  }
  return '';
};
