import { Name } from "./Types/Person.types";

type TestProps = {
  name: Name;
  children: string[];
};

export const Test = ({ children }: TestProps) => {
  return (
    <div>
      <h2> {children} </h2>
    </div>
  );
};
