import Box from '@/components/common/box/Box';

interface InfoCardProps {
  title: string;
  description?: string;
  url?: string;
  icon: React.ElementType;
  categoryLabel: string;
  onClick: (text: string) => void;
}

const InfoCard = ({
  title,
  description,
  url,
  icon: Icon,
  categoryLabel,
  onClick,
}: InfoCardProps) => {
  return (
    <Box className="flex flex-col w-36 h-36 px-4 py-4 flex-shrink-0 gap-2">
      <div className="flex flex-[4] items-center justify-center">
        <p
          className="text-[15px] font-semibold whitespace-normal text-center leading-[1.2] line-clamp-2 cursor-pointer"
          onClick={() => title && onClick(title)}
        >
          {title}
        </p>
      </div>
      <div className="flex flex-[6] flex-col gap-1 justify-center">
        <div className="flex items-center gap-1">
          <Icon />
          <p className="font-bold text-[11px]">{categoryLabel}</p>
        </div>
        <div className="bg-mainBlue rounded-xl p-1.5">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-white text-[12px] underline justify-center"
            >
              상세보기
            </a>
          ) : (
            <p
              className="text-white text-[12px] leading-[1.2] whitespace-normal line-clamp-2 cursor-pointer"
              onClick={() => description && onClick(description)}
            >
              {description ?? '상세 정보 없음'}
            </p>
          )}
        </div>
      </div>
    </Box>
  );
};

export default InfoCard;
