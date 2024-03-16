import React, {useState} from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  
  function handleMouseOver() {
    setMouseOver(true);
    setHeading("AAAAAA");
  }

  function handleMouseOut() {
    setMouseOver(false);
    setHeading("Hello");
  }

  function handleClick() {
    setHeading("I was clicked");
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        style={{backgroundColor: isMouseOver ? "black" : "white"}} 
        onClick={handleClick} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;