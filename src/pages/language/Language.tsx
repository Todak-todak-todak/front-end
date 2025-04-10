import Header from '@/components/Header';
import Box from '@/components/Box';
import Korea from '@assets/images/Language/Korea.svg?react';
import America from '@assets/images/Language/America.svg?react';
import China from '@assets/images/Language/China.svg?react';
import Vietnam from '@assets/images/Language/Vietnam.svg?react';
import Button from '@/components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const languages = [
  { label: '한국어', Icon: Korea, value: 'KOREA' },
  { label: 'English', Icon: America, value: 'ENGLISH' },
  { label: 'Tiếng Việt', Icon: Vietnam, value: 'VIETNAM' },
  { label: '中文', Icon: China, value: 'CHINA' },
];

const Language = () => {
  const [language, setLanguage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!language) return;
    navigate('/add');
  };

  return (
    <>
      <Header />
      <div className="px-[30px] pb-[43px]">
        <div className="text-[#111111] text-[28px] leading-[34px] tracking-[-0.6px] text-left">
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
