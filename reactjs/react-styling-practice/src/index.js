//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const now = Number(new Date().getHours());

let nowString = "";
let customStyle = {
  color: "",
};

if (0 <= now && now < 12) {
  nowString = "Good Morning.";
  customStyle.color = "red";
} else if (12 <= now && now < 18) {
  nowString = "Good Afternoon.";
  customStyle.color = "green";
} else if (18 <= now && now < 24) {
  nowString = "Good Evening.";
  customStyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 style={customStyle} className="heading">
      {nowString}
    </h1>
  </div>,
  document.getElementById("root")
);
