import React from "react";
import "../../styles/common.css";

interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownProps {
  value: string | number;
  options: DropdownOption[];
  onChange: (value: string | number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange }) => {
  return (
    <select
      name="dropdown"
      className="dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
