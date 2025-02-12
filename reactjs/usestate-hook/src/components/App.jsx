import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // Destructuring
  // The second returned by the useState is a function. This function will be used to update value inside the state.

  // const state = useState(120)
  // console.log(state[0]);
  // If you console log state, it is an array.
  // The first element is whatever we give with useState(x), the second is some sort of function.

  function increase() {
    setCount(count + 1);
    // console.log("I got clicked!", count);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
