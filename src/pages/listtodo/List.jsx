import React, { useState } from "react";
import "./list.css";

function List() {
  const [inputText, setInputText] = useState("");
  return (
  <div className="todocontainer">
    
      <h1>ToDo</h1>

<div className="input-box">
  <form
  onSubmit={(e)=>{
e.preventDefault()


  }}>
       <input type="text" 
      id="text"
      name="text"
        placeholder="enter your text"
        onChange={(e)=>{
               setInputText(e.target.value)


        }


        }
     />
        <button>+</button> 
     
       </form>
         </div>
      <div>{inputText}</div>
   </div>
   
  );
}

export default List;
