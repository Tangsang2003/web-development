import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "fName") {
      setContact((previousValue) => {
        return {
          fName: value,
          lName: previousValue.lName,
          email: previousValue.email,
        };
      });
    } else if (name === "lName") {
      setContact((previousValue) => {
        return {
          fName: previousValue.fName,
          lName: value,
          email: previousValue.email,
        };
      });
    } else if (name === "email") {
      setContact((previousValue) => {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: value,
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
