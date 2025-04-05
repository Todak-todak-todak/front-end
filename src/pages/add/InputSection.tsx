import Input from '@/components/Input';

type Field = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

type Props = {
  fields: Field[];
};

const InputSection = ({ fields }: Props) => (
  <>
    {fields.map((field, idx) => (
      <div key={idx} className="flex flex-col gap-3">
        <p className="text-[#111] text-[18px]">{field.label}</p>
        <Input
          placeholder={field.placeholder}
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
        />
      </div>
    ))}
  </>
);

export default InputSection;
