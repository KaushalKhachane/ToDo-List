import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [item, setItem] = useState([]);

  function addItem(inputText) {
    setItem((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id){
    // console.log("deleted");
    setItem(prevItems => {
      return prevItems.filter((item,index) => {
        return index!=id;
      }
      )
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem}/>
      <div>
        <ul>
          {item.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
