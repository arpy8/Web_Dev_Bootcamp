import React from "react";
import Card from "./Card";
import contact from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contact.map((person, index) => (
        <Card
          key={index}
          name={person.name}
          img={person.imgURL}
          tel={person.phone}
          email={person.email}
        ></Card>
      ))}
    </div>
  );
}

export default App;