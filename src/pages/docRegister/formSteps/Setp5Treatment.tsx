import { useFormContext, Controller } from 'react-hook-form';
import TextInputField from '../component/TextInputField';
import CircleCheckbox from '../component/CheckBox';

const Step5Treatment = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">치료 내용</p>
      <div className="flex flex-col w-full gap-8 py-4">
        <TextInputField
          name="treatmentInfo.bodyPart"
          label="다친 부위를 알려주세요"
          placeholder="예) 팔, 다리, 머리 등"
        />

        <TextInputField
          name="treatmentInfo.hospital"
          label="의료기관을 알려주세요"
          placeholder="의료기관명을 입력해주세요"
        />

        <div className="flex flex-col px-8 gap-4 items-start">
          <p className="font-semibold">치료를 구분해주세요</p>
          <Controller
            name="treatmentInfo.category"
            control={control}
            render={({ field }) => (
              <div className="flex gap-6">
                <label className="flex items-center">
                  <CircleCheckbox
                    checked={field.value === '입원'}
                    onChange={() => field.onChange('입원')}
                  />
                  <span className="text-sm text-gray-800">입원</span>
                </label>
                <label className="flex items-center">
                  <CircleCheckbox
                    checked={field.value === '통원'}
                    onChange={() => field.onChange('통원')}
                  />
                  <span className="text-sm text-gray-800">통원</span>
                </label>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Step5Treatment;
