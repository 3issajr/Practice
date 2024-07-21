import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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

  // const Human = {
  //   first: "Ahmed",
  //   last: "Eissa",
  // };

  // const Humans = [
  //   {
  //     first: "Ahmed",
  //     last: "Eissa",
  //   },
  //   {
  //     first: "Menna",
  //     last: "Seada",
  //   },
  // ];
  return (
    <div className="App">
      {/* <Greet name="Vishwas" isLoggedIn={true} />
      <Person name={personName} /> */}
      <PersonList names={nameList} />
      <Status status="loading" />
      {/* <Heading>Placehoder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />
      <Container style={{ border: "1px solid black", padding: "1rem" }} /> */}
    </div>
  );
}

export default App;
