import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {emojipedia.map((emojiTerm) => (
        <Card
          key={emojiTerm.id}
          emoji={emojiTerm.emoji}
          name={emojiTerm.name}
          meaning={emojiTerm.meaning}
        />
      
      ))}
  
      </dl>
    </div>
  );
}

export default App;
