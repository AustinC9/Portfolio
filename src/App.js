import React from "react";
import Clock from "./Clock/Clock";
import Stopwatch from "./Stopwatch/Stopwatch"
import Weather from "./Weather/Weather"
// import '/Users/austincarson/Sites/react_portfolio/src/Weather/Weather.css'


function App() {
  return (
    <div className="container">
      <div className="card">
      <h1>Digital Clock</h1>
        <Clock />
      </div>
      <div className="card">
      <h1>Stopwatch</h1>
        <Stopwatch />
      </div>
      <main>

      <div className="weatherApp card">
        <Weather />
      </div>
      </main>

    </div>
  );
}

export default App;
