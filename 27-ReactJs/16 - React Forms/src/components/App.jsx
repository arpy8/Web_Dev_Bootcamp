import React, {useState} from "react";

function App() {
  const [name, setName] = useState(""); 
  const [temp_name, setTempName] = useState(""); 
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event){
    setTempName(event.target.value);
  }
  
  function handleClick(event){
    setName(temp_name!="Hello,"?temp_name:"Hello");

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1 class="hero-text upText">Hello, {name}</h1>
      <br />
      <form onSubmit={handleClick}>
        <input 
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{backgroundColor: isMouseOver?"black":"#00000010"}}
          onMouseOver={() => {
            setMouseOver(true);
          }}
          onMouseOut={() => {
            setMouseOver(false);
          }}
        >{isMouseOver?"You Sure?":"Submit"}</button>
      </form>
    </div>
  );
}

export default App;