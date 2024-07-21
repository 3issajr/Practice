import { StatusProps } from "./Types/Status.types";

export const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "loading";
  } else if (status === "success") {
    message = "Data fetched succesfully";
  } else if (status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status : {message}</h2>
    </div>
  );
};
