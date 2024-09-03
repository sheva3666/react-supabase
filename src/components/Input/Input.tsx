import React from "react";
import "./Input.css";

export type InputProps = {
  placeholder: string;
  type?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  value: string;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  type = "text",
  disabled = false,
  onChange,
  value,
}) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default Input;
