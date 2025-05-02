import Box from '@/components/Box';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getDocList } from '@/apis/doc';
import { DocListResponse, DocumentStatusResponse } from '@/types/doc';
import { patchDocStatus } from '@/apis/doc';
import { useNavigate } from 'react-router-dom';

const DocBox = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: docListData } = useQuery<DocListResponse>({
    queryKey: ['docList'],
    queryFn: getDocList,
  });

  const handleNavigate = (docPk: number) => {
    navigate(`/docdetail/${docPk}`);
  };

  const mutation = useMutation({
    mutationFn: patchDocStatus,
    onSuccess: (data) => {
      queryClient.setQueryData(['docStatus', data.documentId], {
        data: { docWhether: data.docWhether },
      });
      queryClient.invalidateQueries({ queryKey: ['docList'] });
    },
  });

  const checkDocWhether = (docPk: number) => {
    const status = queryClient.getQueryData<DocumentStatusResponse>([
      'docStatus',
      docPk,
    ]);
    return status?.data?.docWhether ?? false;
  };

  const handleClick = async (docPk: number) => {
    const docWhether = !checkDocWhether(docPk);
    mutation.mutate({ documentId: docPk, docWhether });
  };

  return (
    <div className="flex flex-col gap-4 px-4 h-screen">
      <p className="flex items-start text-xl font-bold px-4">
        {t('docBox.title')}
      </p>
      <div className="flex flex-col gap-4 px-4 h-[22rem] overflow-y-auto pt-1 pb-2">
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
                    } py-2 px-5 rounded-xl`}
                  >
                    <p className="text-white font-semibold text-sm">
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
