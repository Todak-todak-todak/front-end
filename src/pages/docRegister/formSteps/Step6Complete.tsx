import CheckIcon from '@assets/images/Doc/Check.svg?react';
import { useTranslation } from 'react-i18next';

const Step6Complete = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col pt-52 w-full justify-center items-center gap-8 ">
      <CheckIcon />
      <p className="font-semibold text-2xl">{t('complete')}</p>
    </div>
  );
};

export default Step6Complete;
