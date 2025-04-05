type GoogleLoginButtonProps = {
  redirectUri?: string;
};

const GoogleLoginButton = ({ redirectUri }: GoogleLoginButtonProps) => {
  const handleGoogleLogin = () => {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID';
    const redirect = encodeURIComponent(
      redirectUri || 'http://localhost:3000/oauth/callback'
    );
    const scope = encodeURIComponent('email profile');
    const state = encodeURIComponent('randomState');

    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirect}&scope=${scope}&state=${state}&access_type=offline&prompt=consent`;

    window.location.href = oauthUrl;
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-[370px] h-[60px] bg-white border border-solid border-[1px] border-[#ABB5B2] rounded-[10px] relative"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2"
      />
      <span className="text-[#828282] text-[16px] font-normal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        구글 계정으로 로그인
      </span>
    </button>
  );
};

export default GoogleLoginButton;
