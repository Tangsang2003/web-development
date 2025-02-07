import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        style={{ height: props.height, width: props.width }}
        src={props.img}
        alt={props.alt}
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="beyonce_img"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Tony Stark"
      img="https://i.pinimg.com/736x/9b/9f/75/9b9f752fc3b658076e6b8ebc454f3819.jpg"
      alt="tony-stark"
      tel="+012 345 678"
      email="stark@avengers.com"
      width="200px"
    />
  </div>,
  document.getElementById("root")
);
