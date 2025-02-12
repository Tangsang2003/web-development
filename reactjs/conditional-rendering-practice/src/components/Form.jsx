import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userIsRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {props.userIsRegistered && <button type="submit">Login</button>}
      {props.userIsRegistered === false && (
        <button type="submit">Register</button>
      )}
    </form>
  );
}

export default Form;
