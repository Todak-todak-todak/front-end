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
import AddressIcon from '@assets/images/MyPage/Address.svg?react';
import InfoItem from './InfoItem';
import OptionButtons from './OptionButtons';
import { useTranslation } from 'react-i18next';
import { useGetUserProfile, useEditUserProfile } from '@/apis/user';
import { useEffect } from 'react';
import { useLogout } from '@/apis/user';
import { useNavigate } from 'react-router-dom';

const industryMap: Record<string, string> = {
  MANUFACTURE: '제조업',
  CONSTRUCTION: '건설업',
  ETC: '기타',
};

const MyPage = () => {
  const { profile, isEdit, toggleEdit, updateProfile } = useProfileStore();
  const { t } = useTranslation();
  const { data } = useGetUserProfile();
  const editMutation = useEditUserProfile();
  const { mutate: logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        alert('로그아웃이 완료되었습니다!');
        navigate('/');
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

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
      icon: <AddressIcon />,
      label: t('mypage.address.label'),
      key: 'address',
    },
    {
      icon: <IndustryIcon />,
      label: t('mypage.industry.label'),
      key: 'industry',
      options: [
        t('mypage.industry.options.manufacturing'),
        t('mypage.industry.options.construction'),
        t('mypage.industry.options.etc'),
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

  useEffect(() => {
    if (data) {
      useProfileStore.getState().updateProfile({
        name: data.data.userName,
        idCard: data.data.userRegisterNm,
        phone: data.data.userPhoneNm,
        gender: data.data.userGender,
        address: data.data.userAddress,
        industry: industryMap[data.data.industryName] ?? data.data.industryName,
        language: data.data.userLanguage,
      });
    }
  }, [data]);

  return (
    <>
      <Header
        title={t('mypage.title')}
        img={
          isEdit ? (
            <Check
              className="w-[25px] h-[25px] cursor-pointer"
              onClick={async () => {
                try {
                  console.log('프로필 수정:', profile);

                  await editMutation.mutateAsync({
                    userName: profile.name,
                    userRegisterNm: profile.idCard,
                    userPhoneNm: profile.phone,
                    userGender: profile.gender,
                    industryName: profile.industry,
                    userLanguage: profile.language,
                    userAddress: profile.address,
                  });

                  toggleEdit();
                  alert('정보가 수정되었습니다!');
                } catch (error) {
                  console.error('수정 실패:', error);
                  alert('오류 발생');
                }
              }}
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
              ) : isEdit && !options ? (
                <input
                  value={profile[key]}
                  onChange={(e) => updateProfile({ [key]: e.target.value })}
                  className="border-b border-gray-300 text-[18px] py-1 px-2 w-full text-right"
                />
              ) : (
                <div className="flex items-center gap-1">
                  {key === 'industry'
                    ? industryMap[profile[key]] ?? profile[key]
                    : profile[key]}
                </div>
              )
            }
            editOptions={
              isEdit && options && key !== 'language' ? (
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
          onClick={handleLogout}
          value=""
          isButton
        />
      </div>
    </>
  );
};

export default MyPage;
