import React from "react";
import ReactDOM from "react-dom";

const name = "John Doe";
const luckyNumber = 10;
const district = "Tehrathum";
const country = "Nepal";

ReactDOM.render(
  <div>
    <h1>Hello {name}.</h1>
    {/* We can use ES6 literals or string injection like this. Also called template literals/ string interpolation */}
    <p>You are from {` ${district}, ${country}`}.</p>
    {/* We can Write JavaScript Expressions like this.
    But, We can't write statements like if, else, etc. */}
    <p>Your lucky number is {luckyNumber}.</p>
    <p>Your another lucky number is {Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
