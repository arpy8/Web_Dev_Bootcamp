import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://raw.githubusercontent.com/arpy8/arpy8.github.io/assets/img/profile-img.jpg"></Avatar>
      {
        contacts.map((person, index)=> (
          <Card
          key={index}
          id={person.id}
          name={person.name}
          img={person.imgURL}
          tel={person.phone}
          email={person.email}
          />
        ))}
        </div>
  )
};

export default App;
