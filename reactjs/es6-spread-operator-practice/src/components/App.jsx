import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    const newAddedItem = event.target.value;
    setNewItem(newAddedItem);
  }

  function handleClick(event) {
    if (newItem.trim() !== "") {
      setItemList([...itemList, newItem]);
      setNewItem("");
    }
  }

  function renderList(item, index) {
    return <li key={index}> {item} </li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={newItem} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{itemList.map(renderList)}</ul>
      </div>
    </div>
  );
}

export default App;
