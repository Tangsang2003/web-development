import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted!");
  }

  const [mouseOverStyle, setMouseStyle] = useState({
    backgroundColor: "white",
  });
  function handleMouseOver() {
    setMouseStyle({ backgroundColor: "black" });
  }

  function handleMouseOut() {
    setMouseStyle({ backgroundColor: "white" });
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={mouseOverStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
