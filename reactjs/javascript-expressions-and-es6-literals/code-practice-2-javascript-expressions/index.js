//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Tangsang Chongbang.
//Copyright 2024.

import React from "react";
import ReactDOM from "react-dom";

const name = "Tangsang";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright &copy; {currentYear}.</p>
  </div>,
  document.getElementById("root")
);