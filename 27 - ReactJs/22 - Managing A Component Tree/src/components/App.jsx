import ToDoItem from "./ToDoItem";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [inputText, ...prevItems];
    });
    setInputText("");
  }
  
  function resetItem() {
    setItems(prevItems => {
      prevItems = []
      return prevItems;
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
        <button onClick={resetItem}>
          <span>Reset</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
          <ToDoItem 
          key={index}
          id={index}
          text={todoItem}
          onChecked={deleteItem}
          />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
