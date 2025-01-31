// var React = require("react");
// Latest Feature instead of require
import React from "react";
// var ReactDom = require("react-dom");
import ReactDom from "react-dom";

// ReactDom.render(What To Show, Where To Show, Callback Function for When the render function has completed)
ReactDom.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
