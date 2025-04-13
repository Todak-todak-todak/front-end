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
import { useTranslation } from 'react-i18next';

const MyPage = () => {
  const { profile, isEdit, toggleEdit, updateProfile } = useProfileStore();
  const { t } = useTranslation();

  const infoFields: {
    icon: React.ReactNode;
    label: string;
    key: keyof typeof profile;
    options?: string[];
  }[] = [
    { icon: <UserIcon />, label: t('mypage.name'), key: 'name' },
    { icon: <IdCardIcon />, label: t('mypage.idCard'), key: 'idCard' },
    { icon: <PhoneIcon />, label: t('mypage.phone'), key: 'phone' },
    {
      icon: <GenderIcon />,
      label: t('mypage.gender.label'),
      key: 'gender',
      options: [t('mypage.gender.female'), t('mypage.gender.male')],
    },
    {
      icon: <IndustryIcon />,
      label: t('mypage.industry.label'),
      key: 'industry',
      options: [
        t('mypage.industry.options.manufacturing'),
        t('mypage.industry.options.construction'),
        t('mypage.industry.options.fishery'),
      ],
    },
    {
      icon: <LanguageIcon />,
      label: t('mypage.language.label'),
      key: 'language',
      options: [
        t('mypage.language.options.ko'),
        t('mypage.language.options.en'),
        t('mypage.language.options.vi'),
        t('mypage.language.options.zh'),
      ],
    },
  ];

  return (
    <>
      <Header
        title={t('mypage.title')}
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
              <div className="flex items-center gap-1">{profile[key]}</div>
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

        <InfoItem
          icon={<LogoutIcon />}
          label={t('mypage.logout')}
          value=""
          isButton
        />
      </div>
    </>
  );
};

export default MyPage;
