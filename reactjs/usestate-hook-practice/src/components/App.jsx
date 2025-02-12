import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  const timeNow = new Date().toLocaleTimeString([], { hour12: false });
  // console.log(timeNow);
  const [time, updateTime] = useState(timeNow);
  function getTime() {
    const newNow = new Date().toLocaleTimeString([], { hour12: false });
    updateTime(newNow);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
