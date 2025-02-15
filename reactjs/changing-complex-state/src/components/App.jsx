import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  function handleChange(event) {
    // if (event.target.name === "fName") {
    //   setFullName({
    //     firstName: event.target.value,
    //     lastName: fullName.lastName,
    //   });
    // } else if (event.target.name === "lName") {
    //   setFullName({
    //     firstName: fullName.firstName,
    //     lastName: event.target.value,
    //   });
    // }

    // The code above was how I implemented it. A better way is:
    const { name, value } = event.target;
    // Always remember not to use event in hooks set funciton because the event is synthetic.
    // So, get it in a constant by destructuring like this or any other way you can get hold of it.
    // Note here that a function can be passed to set function with the previous value of the state.
    setFullName((previousValue) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: previousValue.lastName,
        };
      } else if (name === "lName") {
        return {
          firstName: previousValue.firstName,
          lastName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
