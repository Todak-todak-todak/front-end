import DocBox from '../../components/features/docList/DocBox';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DocumentIcon from '@/3D/Document';

const DocList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/doc');
  };
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-4">
        <div className="relative flex flex-col gap-4 py-6 justify-center items-center bg-gradient-to-b from-[#CADCFF] to-white rounded-b-3xl overflow-hidden">
          <p className="font-bold text-xl">{t('docList.title')}</p>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <button onClick={handleClick} className="z-10">
              <DocumentIcon />
            </button>
            <button
              onClick={handleClick}
              className="relative flex items-center justify-center gap-2 w-full py-2 rounded-full bg-gradient-to-r from-mainBlue to-inputBlue text-white text-lg font-semibold shadow-md"
            >
              {t('docList.doc')}
              <span className="inline-block animate-bounce-x-repeat"> →</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <DocBox />
        </div>
      </div>
    </div>
  );
};
export default DocList;
