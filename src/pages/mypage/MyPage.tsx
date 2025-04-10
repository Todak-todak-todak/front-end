import { useProfileStore } from './ProfileStore';
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
  const { profile, isEdit, toggleEdit, updateProfile } = useProfileStore();

  const infoFields: {
    icon: React.ReactNode;
    label: string;
    key: keyof typeof profile;
    options?: string[];
  }[] = [
    { icon: <UserIcon />, label: '이름', key: 'name' },
    { icon: <IdCardIcon />, label: '외국인 등록번호', key: 'idCard' },
    { icon: <PhoneIcon />, label: '전화번호', key: 'phone' },
    {
      icon: <GenderIcon />,
      label: '성별',
      key: 'gender',
      options: ['여자', '남자'],
    },
    {
      icon: <IndustryIcon />,
      label: '종사하는 산업',
      key: 'industry',
      options: ['제조업', '건설업', '어업'],
    },
    {
      icon: <LanguageIcon />,
      label: '언어',
      key: 'language',
      options: ['한국어', 'English', 'Tiếng Việt', '中文'],
    },
  ];

  return (
    <>
      <Header
        title="내정보"
        img={
          isEdit ? (
            <Check
              className="w-[25px] h-[25px] cursor-pointer"
              onClick={toggleEdit}
            />
          ) : (
            <Edit
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={toggleEdit}
            />
          )
        }
      />

      <div className="px-8 py-4 bg-white">
        {infoFields.map(({ icon, label, key, options }) => (
          <InfoItem
            key={key}
            icon={icon}
            label={label}
            value={
              key === 'language' ? (
                <div className="flex items-center gap-1">{profile[key]}</div>
              ) : (
                profile[key]
              )
            }
            editOptions={
              isEdit && options ? (
                <OptionButtons
                  options={options}
                  selected={profile[key] as string}
                  onSelect={(val) => updateProfile({ [key]: val })}
                />
              ) : undefined
            }
          />
        ))}

        <InfoItem icon={<LogoutIcon />} label="로그아웃" value="" isButton />
      </div>
    </>
  );
};

export default MyPage;
