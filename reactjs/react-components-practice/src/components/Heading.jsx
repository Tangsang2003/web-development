import React from "react";
function Heading() {
  let time = new Date().getHours();
  let greeting = "";
  let inlineStyle = {
    color: "",
  };

  if (0 <= time && time < 12) {
    greeting = "Good Morning.";
    inlineStyle.color = "red";
  } else if (12 <= time && time < 18) {
    greeting = "Good Afternoon.";
    inlineStyle.color = "green";
  } else if (18 <= time && time <= 23) {
    greeting = "Good Evening.";
    inlineStyle.color = "blue";
  }
  return (
    <h1 style={inlineStyle} className="heading">
      {greeting}
    </h1>
  );
}

export default Heading;
