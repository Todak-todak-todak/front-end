import { useState } from 'react';
import Header from '@/components/Header';
import Edit from '@assets/images/MyPage/Edit.svg?react';
import Check from '@assets/images/MyPage/Check.svg?react';
import UserIcon from '@assets/images/MyPage/User.svg?react';
import IdCardIcon from '@assets/images/MyPage/IdCard.svg?react';
import PhoneIcon from '@assets/images/MyPage/Phone.svg?react';
import GenderIcon from '@assets/images/MyPage/Gender.svg?react';
import IndustryIcon from '@assets/images/MyPage/Industry.svg?react';
import LanguageIcon from '@assets/images/MyPage/Lang.svg?react';
import LogoutIcon from '@assets/images/MyPage/Logout.svg?react';
import InfoItem from './InfoItem';
import OptionButtons from './OptionButtons';

const MyPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [selectedGender, setSelectedGender] = useState('남자');
  const [selectedIndustry, setSelectedIndustry] = useState('건설업');
  const [selectedLanguage, setSelectedLanguage] = useState('Tiếng Việt');

  const genderOptions = ['여자', '남자'];
  const industryOptions = ['제조업', '건설업', '어업'];
  const languageOptions = ['한국어', 'English', 'Tiếng Việt', '中文'];

  const handleToggleEdit = () => setIsEdit((prev) => !prev);

  return (
    <>
      <Header
        title="내정보"
        img={
          isEdit ? (
            <Check className="w-[25px] h-[25px]" onClick={handleToggleEdit} />
          ) : (
            <Edit className="w-[20px] h-[20px]" onClick={handleToggleEdit} />
          )
        }
      />

      <div className="px-8 py-4 bg-white">
        <InfoItem icon={<UserIcon />} label="이름" value="Nguyen Tat Thanh" />
        <InfoItem
          icon={<IdCardIcon />}
          label="외국인 등록번호"
          value="000402-3000000"
        />
        <InfoItem icon={<PhoneIcon />} label="전화번호" value="010-1234-4321" />

        <InfoItem
          icon={<GenderIcon />}
          label="성별"
          value={selectedGender}
          editOptions={
            isEdit &&
            OptionButtons(genderOptions, selectedGender, setSelectedGender)
          }
        />

        <InfoItem
          icon={<IndustryIcon />}
          label="종사하는 산업"
          value={selectedIndustry}
          editOptions={
            isEdit &&
            OptionButtons(
              industryOptions,
              selectedIndustry,
              setSelectedIndustry
            )
          }
        />

        <InfoItem
          icon={<LanguageIcon />}
          label="언어"
          value={
            <div className="flex items-center gap-1">
              <span>{selectedLanguage}</span>
            </div>
          }
          editOptions={
            isEdit &&
            OptionButtons(
              languageOptions,
              selectedLanguage,
              setSelectedLanguage
            )
          }
        />

        <InfoItem icon={<LogoutIcon />} label="로그아웃" value="" isButton />
      </div>
    </>
  );
};

export default MyPage;
