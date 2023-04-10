import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Map from "../components/Map.jsx";

// Render app with demo chart
const App = () => (
  <div>
    <h1>Demos</h1>

    <h2>Highcharts</h2>
    <Map />
  </div>
);

render(<App />, document.getElementById("root"));
