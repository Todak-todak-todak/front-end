type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-[50px] px-4 border rounded-[10px] border-inputBlue text-[#111] placeholder:text-[#999] bg-white"
    />
  );
};

export default Input;
