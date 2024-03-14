  import React, {useState} from "react";

  function App() {
    const [listItems, setListItems] = useState([]);
    const [inputText, setInputText] = useState("");

    function handleInputText(event) {
      setInputText(event.target.value);
    }  

    function handleClick() {
      setListItems(prevValue => {
        const isDuplicate = prevValue.some(item => React.isValidElement(item) && item.props.children === inputText);
    
        return isDuplicate ? [...prevValue] : [<li key={inputText}>{inputText}</li>,  ...prevValue];
      });
    }

    return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input type="text" onChange={handleInputText} /> 
          <button
            onClick={handleClick}
            > <span>Add Item +</span>
          </button>
          <button
            onClick={()=>{setListItems([])}}
            > <span>Reset ↺</span>
          </button>
        </div>
        <div>
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
    );
  }

  export default App;