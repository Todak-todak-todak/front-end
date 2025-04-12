import Header from '@/components/Header';
import Box from '@/components/Box';
import Korea from '@assets/images/Language/Korea.svg?react';
import America from '@assets/images/Language/America.svg?react';
import China from '@assets/images/Language/China.svg?react';
import Vietnam from '@assets/images/Language/Vietnam.svg?react';
import Button from '@/components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // i18next 훅 추가

const languages = [
  { label: '한국어', Icon: Korea, value: 'ko' }, // 'KOREA' -> 'ko'
  { label: 'English', Icon: America, value: 'en' }, // 'ENGLISH' -> 'en'
  { label: 'Tiếng Việt', Icon: Vietnam, value: 'vi' }, // 'VIETNAM' -> 'vi'
  { label: '中文', Icon: China, value: 'zh' }, // 'CHINA' -> 'zh'
];

const Language = () => {
  const [language, setLanguage] = useState<string | null>(null);
  const { i18n } = useTranslation(); // i18n 객체 가져오기
  const navigate = useNavigate();

  const handleClick = () => {
    if (!language) return;

    localStorage.setItem('lang', language); //선택한 언어 localstorage 저장

    // 언어 변경
    i18n.changeLanguage(language); // 언어 변경

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
