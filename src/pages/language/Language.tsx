import { useState } from 'react';
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
  { label: '한국어', Icon: Korea, value: 'ko' },
  { label: 'English', Icon: America, value: 'en' },
  { label: 'Tiếng Việt', Icon: Vietnam, value: 'vi' },
  { label: '中文', Icon: China, value: 'zh' },
];

const Language = () => {
  const [language, setLanguage] = useState<string | null>(null);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!language) return;

    localStorage.setItem('lang', language);
    i18n.changeLanguage(language);
    navigate('/add');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-[1]">
        <Header />
      </div>
      <div className="flex flex-col flex-[9] justify-between px-[30px]">
        <div className="flex flex-col  font-semibold leading-[34px] tracking-[-0.6px] text-left ">
          <p className="text-[24px]">사용할 언어를 선택하세요</p>
          <p className="text-[20px]">Select your language</p>
        </div>

        <div className="flex  flex-wrap gap-x-12 gap-y-8 justify-center  ">
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

        <div className="flex  justify-center pb-4">
          <Button text="다음" disabled={!language} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Language;
