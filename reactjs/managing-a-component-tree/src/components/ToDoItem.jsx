import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onDone(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItem;
