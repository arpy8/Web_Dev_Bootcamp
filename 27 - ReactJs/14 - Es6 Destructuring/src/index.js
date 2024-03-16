import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

var [honda, tesla] = cars;
var {speedStats: {topSpeed:teslaTopSpeed}} = tesla
var {speedStats: {topSpeed:hondaTopSpeed}} = honda

var {coloursByPopularity: [teslaTopColour]} = tesla
var {coloursByPopularity: [hondaTopColour]} = honda

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
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