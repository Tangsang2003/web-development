//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";

// Remember the root div in the HTML file

ReactDom.render(
  <div>
    <h1> Code Practice</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li> Item 3 </li>
    </ul>
  </div>,
  document.getElementById("root")
);