import { Test } from "./Test";
import { Name } from "./Types/Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name, index) => {
        return (
          <h2 key={index}>
            <Test name={name}>
              {name.first} {name.last}
            </Test>
          </h2>
        );
      })}
    </div>
  );
};
