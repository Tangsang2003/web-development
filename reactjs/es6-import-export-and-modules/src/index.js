import React from "react";
import ReactDOM from "react-dom";
import Pie, { doublePi, triplePi } from "./math";
// We can import the default by any name we want. For example, it has been defined by pi in "./math" but we have imported it as Pie.
// We import multiple files like: import Pie, {doublePi, triplePi} from "./math";
// The names must match inside {---}

// We can also import everything like:
//import * as pi from "./math"
// And access as pi.defaule, pi.doublePi, pi.triplePi

ReactDOM.render(
  <ul>
    <li>{Pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
