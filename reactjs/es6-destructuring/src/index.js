// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.log(cars);
const [honda, tesla] = cars; // Destructuring honda and tesla objects from cars
const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour],
} = tesla;
// In the code above, speedStats is the property of tesla object, then the topSpeed is nested within the tesla object.
// We have renamed topSpeed to teslaTopSpeed
const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour],
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
