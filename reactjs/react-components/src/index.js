import React from "react";
import ReactDOM from "react-dom";

import Heading from "./Heading.jsx";
//  OR import Heading form "./Heading";
import List from "./List";

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
