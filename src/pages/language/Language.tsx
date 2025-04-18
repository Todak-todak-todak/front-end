import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Box from '@/components/Box';
import Korea from '@assets/images/Language/Korea.svg?react';
import America from '@assets/images/Language/America.svg?react';
import China from '@assets/images/Language/China.svg?react';
import Vietnam from '@assets/images/Language/Vietnam.svg?react';
import Button from '@/components/Button';

const languages = [
  { label: '한국어', Icon: Korea, value: '한국어' },
  { label: 'English', Icon: America, value: '영어' },
  { label: 'Tiếng Việt', Icon: Vietnam, value: '베트남어' },
  { label: '中文', Icon: China, value: '중국어' },
];

const Language = () => {
  const [language, setLanguage] = useState<string | null>(null);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('accessToken');
    console.log('📦 저장된 accessToken:', token);

    if (token) {
      localStorage.setItem('accessToken', token);
    }
  }, []);

  const handleClick = () => {
    if (!language) return;

    localStorage.setItem('lang', language);
    i18n.changeLanguage(language);
    navigate('/add');
  };

  return (
    <>
      <Header />
      <div className="px-[30px] pb-[43px]">
        <div className="text-[#111111] text-[28px] leading-[34px] tracking-[-0.6px] text-left pt-[20px]">
          <p>사용할 언어를 선택하세요</p>
          <p>Select your language</p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center pb-[180px] pt-[93px]">
          {languages.map(({ label, Icon, value }) => {
            const isSelected = language === value;

            return (
              <Box
                key={value}
                variant="selectable"
                selected={isSelected}
                onClick={() => setLanguage(value)}
                className="w-[181px] h-[181px] flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors"
              >
                <Icon />
                <span className="text-[20px] font-medium text-[#111]">
                  {label}
                </span>
              </Box>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button text="다음" disabled={!language} onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Language;
