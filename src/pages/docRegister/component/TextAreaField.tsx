import { useFormContext } from 'react-hook-form';

interface TextAreaFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
}

const TextAreaField = ({
  name,
  label,
  placeholder,
  rows = 4,
}: TextAreaFieldProps) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-4 px-8 items-start ">
      <label className="font-semibold ">{label}</label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        className="w-full text-sm p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default TextAreaField;
