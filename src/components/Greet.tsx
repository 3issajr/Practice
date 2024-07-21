import { GreetProps } from "./Types/Greet.types";

export const Greet = ({ name, isLoggedIn, messageCount = 0 }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}, You have ${messageCount} unread messages.`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
