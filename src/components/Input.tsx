import { InputProps } from "./Types/Input.types";

export const Input = ({ value, handleChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value, event);
  };
  return <input type="text" value={value} onChange={handleChange} />;
};
