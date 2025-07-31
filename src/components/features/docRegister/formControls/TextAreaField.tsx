import { useFormContext } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import get from 'lodash.get';
import { FieldError } from 'react-hook-form';

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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = get(errors, name) as FieldError | undefined;
  const hasError = !!fieldError;

  return (
    <div className="flex flex-col gap-2 px-8 items-start w-full">
      <label className="font-semibold">{label}</label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        className={`w-full text-sm p-3 border rounded-md resize-none focus:outline-none focus:ring-2 ${
          hasError
            ? 'border-red-500 focus:ring-red-400'
            : 'border-gray-300 focus:ring-blue-400'
        }`}
      />
      {hasError && (
        <FormHelperText className="text-xs mt-1 text-red-500 w-full" error>
          {fieldError.message?.toString()}
        </FormHelperText>
      )}
    </div>
  );
};

export default TextAreaField;
