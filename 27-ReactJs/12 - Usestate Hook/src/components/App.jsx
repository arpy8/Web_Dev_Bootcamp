import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  function setValue(condition) {
    if (condition === "increase") {
      setCount(count+1);
    } else if (condition === "decrease") {
      setCount(count-1);
    } else if (condition === "reset") {
      setCount(0);
    }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={()=> setValue("increase")}>+</button>
      <button onClick={()=> setValue("reset")}>↻</button>
      <button onClick={()=> setValue("decrease")}>-</button>
    </div>
  );
}

export default App;