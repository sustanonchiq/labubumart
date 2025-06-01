import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setSelectedOption(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <button
        type="button"
        className={`w-full cursor-pointer px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          isOpen ? 'ring-2 ring-blue-500 border-blue-500' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <span className="block truncate">
            {options.find((opt) => opt.value === selectedOption)?.label}
          </span>
        ) : (
          <span className="block truncate text-gray-400">{placeholder}</span>
        )}
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <li
              key={option.value}
              className={`py-2 px-4 cursor-pointer hover:bg-blue-50 ${
                option.value === value
                  ? 'bg-blue-100 text-blue-800'
                  : 'text-gray-900'
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
