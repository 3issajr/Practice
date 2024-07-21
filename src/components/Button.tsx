import { ButtonProps } from "./Types/Button.types";

// void can make the functio not return anything
export const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
};
