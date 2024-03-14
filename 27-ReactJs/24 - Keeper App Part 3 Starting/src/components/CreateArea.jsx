import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  })

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event){
      const {name , value} = event.target;
      
      setNote(prevNote => {
        return {
          ...prevNote, 
          [name]: value
        }
      })

  }

  function submitNote(event){
    if (note.title !== "" && note.content !== "") {
      props.onAdd(note);
      
      setNote({
        title:"",  
        content:""
      })
    }

    event.preventDefault();
  }
  
  return (
      <div>
        <form className="create-note">
          <input 
            name="title"
            onChange={handleChange} 
            value={note.title} 
            placeholder="Title"
            onClick={()=>{
              setExpanded(true);
            }}
          />
          {isExpanded &&
          <textarea 
            name="content" 
            onChange={handleChange} 
            value={note.content} 
            placeholder="Take a note..." 
            rows={isExpanded?3:2}
          />}
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
}

export default CreateArea;