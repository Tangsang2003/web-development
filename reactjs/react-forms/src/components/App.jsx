import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
    setClick(false);
  }

  const [isClicked, setClick] = useState(false);
  function handleClick(event) {
    setClick(true);
    event.preventDefault(); // Prevents the default behaviour of refreshing the page on submit.
  }

  return (
    <div className="container">
      <h1>Hello {isClicked ? name : ""}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
