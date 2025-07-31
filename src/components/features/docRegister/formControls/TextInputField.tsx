import { useFormContext, Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import get from 'lodash.get';
import { FieldError } from 'react-hook-form';

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
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = get(errors, name) as FieldError | undefined;
  const hasError = !!fieldError;

  return (
    <label className="flex flex-col items-start font-semibold gap-2 px-8 w-full">
      <span className="mb-1">{label}</span>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`border-b w-full font-normal text-sm focus:outline-none ${
              hasError ? 'border-red-500' : 'border-mainGray focus:border-black'
            }`}
          />
        )}
      />
      {hasError && (
        <FormHelperText className=" text-red-500 w-full" error>
          {fieldError.message?.toString()}
        </FormHelperText>
      )}
    </label>
  );
};

export default TextInputField;
