import TextInputField from '../component/TextInputField';
import SelectField from '../component/Select';
import TextAreaField from '../component/TextAreaField';

const Step3Accident = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex font-semibold text-[20px] px-8">재해 정보</p>

      <div className="flex flex-col w-full gap-8 py-4">
        <SelectField
          name="accidentInfo.type"
          label="유형을 선택해주세요"
          options={[
            { value: '', label: '유형' },
            { value: '넘어짐', label: '넘어짐' },
            { value: '베임', label: '베임' },
            { value: '찔림', label: '찔림' },
            { value: '부딪힘', label: '부딪힘' },
            { value: '기타', label: '기타' },
          ]}
        />

        <TextInputField
          name="accidentInfo.date"
          label="재해발생일시를 알려주세요"
          placeholder="YYYY년 MM월 DD일 00시 00분"
        />

        <TextAreaField
          name="accidentInfo.details"
          label="재해발생 경위를 알려주세요"
          placeholder="재해발생경위"
          rows={5}
        />

        <p className="text-sm text-blue-600 leading-relaxed px-8 -mt-6">
          어디에서, 무엇을 하기 위해, 무엇을 사용하여, 어떻게 하다가, 어떤 이유
          때문에, 어떻게 재해를 당하였는지 작성하여 주시길 바랍니다.
        </p>
      </div>
    </div>
  );
};

export default Step3Accident;
