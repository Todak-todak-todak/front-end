import { useFormContext, Controller } from 'react-hook-form'; // Controller도 가져옵니다.
import { FormHelperText } from '@mui/material'; // Material-UI의 FormHelperText를 사용한다고 가정
import get from 'lodash.get';
import { FieldError } from 'react-hook-form';

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

const SelectField = ({ name, label, options }: SelectFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = get(errors, name) as FieldError | undefined;
  const hasError = !!fieldError;

  return (
    <label className="flex flex-col gap-4 items-start px-8 font-semibold w-full">
      {label}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            {...field}
            value={field.value || ''}
            className={`w-full border-b font-normal text-sm focus:outline-none ${
              hasError ? 'border-red-500' : 'border-mainGray focus:border-black'
            }`}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      />
      {hasError && (
        <FormHelperText className="flex w-full justify-start" error>
          {fieldError?.message?.toString()}
        </FormHelperText>
      )}
    </label>
  );
};

export default SelectField;
