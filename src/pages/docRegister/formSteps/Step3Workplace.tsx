import TextInputField from '../component/TextInputField';

const Step3Workplace = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">사업장 정보</p>

      <div className="flex flex-col w-full gap-10 py-4">
        <TextInputField
          name="businessInfo.businessNumber"
          label="사업장관리번호"
          placeholder="사업장관리번호를 입력해주세요."
        />
        <TextInputField
          name="businessInfo.address"
          label="사업장 주소"
          placeholder="사업장 주소를 입력해주세요"
        />
        <TextInputField
          name="businessInfo.phone"
          label="사업장 연락처"
          placeholder="사업장 연락처를 입력해주세요"
        />
        <TextInputField
          name="businessInfo.name"
          label="사업주명"
          placeholder="사업주명을 입력해주세요"
        />
        <TextInputField
          name="businessInfo.businessName"
          label="사업장명"
          placeholder="사업장명을 입력해주세요"
        />
      </div>
    </div>
  );
};

export default Step3Workplace;
