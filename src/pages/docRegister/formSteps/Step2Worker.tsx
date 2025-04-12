import { useFormContext, Controller } from 'react-hook-form';
import TextInputField from '../component/TextInputField';
import SelectField from '../component/Select';
import CircleCheckbox from '../component/CheckBox';

const Step2Worker = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-4 pb-20">
      <p className="flex font-semibold text-[20px] px-8">재해자 정보</p>
      <div className="flex flex-col w-full gap-8  py-4">
        <TextInputField
          name="workerInfo.name"
          label="이름"
          placeholder="이름을 입력해주세요."
        />
        <TextInputField
          name="workerInfo.ssn"
          label="외국인등록번호"
          placeholder="외국인등록번호를 입력해주세요."
        />
        <TextInputField
          name="workerInfo.address"
          label="주소"
          placeholder="거주지를 입력해주세요"
        />
        <TextInputField
          name="workerInfo.phone"
          label="전화번호"
          placeholder="전화번호를 입력해주세요"
          type="tel"
        />

        <div className="flex flex-col px-8 gap-4 items-start">
          <p className=" font-semibold ">성별</p>
          <Controller
            name="workerInfo.gender"
            control={control}
            render={({ field }) => (
              <div className="flex gap-6 ">
                <label className="flex  items-center ">
                  <CircleCheckbox
                    checked={field.value === '남'}
                    onChange={() => field.onChange('남')}
                  />
                  <span className="text-sm text-gray-800">남자</span>
                </label>
                <label className="flex items-center ">
                  <CircleCheckbox
                    checked={field.value === '여'}
                    onChange={() => field.onChange('여')}
                  />
                  <span className="text-sm text-gray-800">여자</span>
                </label>
              </div>
            )}
          />
        </div>

        <SelectField
          name="workerInfo.employmentType"
          label="근로자유형"
          options={[
            { value: '', label: '근로자유형' },
            { value: '근로자', label: '근로자' },
            { value: '노무제공자', label: '노무제공자' },
            { value: '중소기업사업주', label: '중소기업사업주' },
            {
              value: '중소기업사업주 가족종사자',
              label: '중소기업사업주 가족종사자',
            },
            { value: '학생연구자', label: '학생연구자' },
            { value: '건강손상자녀', label: '건강손상자녀' },
            { value: '특수형태근로종사자', label: '특수형태근로종사자' },
            { value: '현장실습생', label: '현장실습생' },
          ]}
        />
      </div>
    </div>
  );
};

export default Step2Worker;
