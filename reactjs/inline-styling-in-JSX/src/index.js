import React from "react";
import ReactDOM from "react-dom";

// To put inline styles in JSX, we have to pass the styles as JavaScript Objects
const customStyle = {
  color: "blue",
  fontSize: "50px", // Here, we have to note that the CSS properties have to be written in camelCase version instead of cababCase.
  border: "10px solid green",
};
ReactDOM.render(
  <div>
    {/* One way of doing it is:  */}
    <h1 style={{ color: "red" }}>Hello World!</h1>
    {/* Another way to do it is to create a JavaScript object and pass it to the style attribute inside JSX
    as shown below */}
    <h1 style={customStyle}>Second Method</h1>
  </div>,
  document.getElementById("root")
);
