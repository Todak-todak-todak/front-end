import { useFormContext, Controller } from 'react-hook-form';

interface TextInputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

const TextInputField = ({
  name,
  label,
  placeholder,
  type = 'text',
}: TextInputFieldProps) => {
  const { control, getValues } = useFormContext();

  return (
    <label className="flex flex-col items-start font-semibold gap-4 px-8">
      {label}
      <Controller
        name={name}
        control={control}
        defaultValue={getValues(name) || ''}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className="border-b w-full font-normal border-mainGray focus:outline-none focus:border-black text-sm"
          />
        )}
      />
    </label>
  );
};

export default TextInputField;
