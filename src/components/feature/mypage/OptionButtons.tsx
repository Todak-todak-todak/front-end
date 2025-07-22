interface OptionButtonsProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const OptionButtons = ({ options, selected, onSelect }: OptionButtonsProps) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onSelect(option)}
        className={`px-5 py-2 rounded-[5px] border text-sm ${
          selected === option
            ? 'bg-blue-600 text-white'
            : 'border-blue-600 text-blue-600'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

export default OptionButtons;
