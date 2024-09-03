import React from "react";
import Input, { InputProps } from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";

interface FormProps {
  submitText: string;
  inputs: InputProps[];
  disabledSubmit?: boolean;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Form: React.FC<FormProps> = ({
  submitText,
  inputs,
  disabledSubmit,
  onSubmit,
}) => {
  return (
    <form className="form">
      {inputs.map(({ placeholder, onChange, value, type }) => (
        <Input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
        />
      ))}
      <Button onClick={onSubmit} text={submitText} disabled={disabledSubmit} />
    </form>
  );
};

export default Form;
