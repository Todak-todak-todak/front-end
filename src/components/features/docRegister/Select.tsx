import { useFormContext } from 'react-hook-form';

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

const SelectField = ({ name, label, options }: SelectFieldProps) => {
  const { register } = useFormContext();

  return (
    <label className="flex flex-col gap-4 items-start px-8 font-semibold">
      {label}
      <select
        {...register(name)}
        className=" w-full border-b font-normal text-sm border-mainGray focus:outline-none focus:border-black"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectField;
