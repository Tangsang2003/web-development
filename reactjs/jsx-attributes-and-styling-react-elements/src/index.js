import React from "react";
import ReactDOM from "react-dom";

const imgSrc = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    {/* The html attributes inside JSX will be camelCase. Eg: className, contenteditable will be 
    contentEditable, etc as shown below. */}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-list"
        src="https://www.allrecipes.com/thmb/tnXjQLBtzLNLfi7KEIuOrVzKbWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/158727-bacon-for-the-family-or-a-crowd-beauty-DDMFS-071-d1cd1e76787b4374b3d046d50b709c83.jpeg"
        alt="bacon"
      />
      <img
        className="food-list"
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Jam%C3%B3n_de_Guijuelo_004_%28cropped%29_4.3.JPG"
        alt="jamon"
      />
      <img
        className="food-list"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s"
        alt="Noodles"
      />
    </div>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <h4>A random picture: </h4>
    <img src={imgSrc + "?grayscale"} alt="random-image" />
  </div>,
  document.getElementById("root")
);
