import Box from '@/components/common/box/Box';
import { useTranslation } from 'react-i18next';
import { useGetDocList, usePatchDocStatus } from '@/apis/doc/doc';
import { useNavigate } from 'react-router-dom';

const DocBox = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: docListData } = useGetDocList();
  const mutation = usePatchDocStatus();

  const handleClick = async (docPk: number) => {
    mutation.mutate({ documentId: docPk });
  };

  const handleNavigate = (docPk: number) => {
    navigate(`/docdetail/${docPk}`);
  };

  return (
    <div className="flex flex-col gap-4 px-4  ">
      <p className="flex items-start text-[18px] font-bold px-4">
        {t('docBox.title')}
      </p>
      <div className="flex flex-col gap-4 px-4  pt-1 pb-2 ">
        {docListData &&
          docListData.data.map((doc) => {
            const isSuccess = doc.docWhether;
            return (
              <Box
                key={doc.docPk}
                className="flex gap-4 h-20 cursor-pointer"
                onClick={() => handleNavigate(doc.docPk)}
              >
                <div className="flex flex-col flex-[7] items-start justify-center p-4">
                  <p className="font-semibold text-[18px]">{doc.disaster}</p>
                  <p className="line-clamp-1 font-semibold text-sm text-mainGray">
                    {doc.docDisasterDate}
                  </p>
                </div>
                <div
                  className="flex flex-[3] p-4 justify-end items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => handleClick(doc.docPk)}
                    className={`${
                      isSuccess ? 'bg-mainGray' : 'bg-mainBlue'
                    } py-2 px-2 rounded-xl`}
                  >
                    <p className="text-white font-semibold text-[14px]">
                      {isSuccess ? t('docBox.done') : t('docBox.progress')}
                    </p>
                  </button>
                </div>
              </Box>
            );
          })}
      </div>
    </div>
  );
};
export default DocBox;
