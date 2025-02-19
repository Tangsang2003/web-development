import React, { useState } from "react";

function ToDoItem(props) {
  const [currentItemState, setCurrentItemState] = useState(false); // true is 'done', false is 'not done'.
  let [itemStyle, setItemStyle] = useState({
    textDecoration: "none",
  });
  function handleClick() {
    currentItemState
      ? setItemStyle({ textDecoration: "none" })
      : setItemStyle({ textDecoration: "line-through" });
    currentItemState ? setCurrentItemState(false) : setCurrentItemState(true);
  }
  return (
    <div onClick={handleClick}>
      <li style={itemStyle}>{props.item}</li>
    </div>
  );
}

export default ToDoItem;
