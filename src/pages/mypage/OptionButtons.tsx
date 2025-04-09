const OptionButtons = (
  options: string[],
  selected: string,
  onSelect: (val: string) => void
) => (
  <div className="flex flex-wrap gap-2">
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onSelect(option)}
        className={`px-5 py-2 rounded-[5px] border ${
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
