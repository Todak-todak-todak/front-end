const extractToken = () => {
  const params = new URLSearchParams(window.location.search);
  const accessToken = params.get('accessToken');
  const refreshToken = params.get('refreshToken');

  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    }

    const cleanurl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanurl);

    return { accessToken, refreshToken };
  }

  return null;
};

export default extractToken;
