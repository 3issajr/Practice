import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
// import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
import { Status } from "./components/Status";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Mutable } from "./components/ref/MutableRef";
import { DomRef } from "./components/ref/DomRef";
import { Counter } from "./components/class/Counter";
import { Profile } from "./components/auth/Profile";
import { Private } from "./components/auth/Private";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restrictions/RandomNumber";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruyce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="Vishwas" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placehoder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container style={{ border: "1px solid black", padding: "1rem" }} />
      {/* <User name="ahmed" email="ahmed@gmail.com" /> */}
      <LoggedIn />
      {/* <Counter /> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Mutable />
      <DomRef />
      <Private isLoggedIn={true} Component={Profile} />
      <Counter message="The Count Value is" />

      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "Bruyce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />

      <RandomNumber value={10} isZero />
    </div>
  );
}

export default App;
