import React from 'react';

interface CustomSelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const CustomSelect = ({ value, options, onChange }: CustomSelectProps) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full bg-white border border-[#0076FF] text-[#0076FF] font-medium rounded-[10px] py-[5px] px-[12px] pr-8 shadow-sm text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#0076FF]">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomSelect;
