import React, { useState } from "react";

function Clock() {
  const [cTime, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div className="App">
      <h1>{cTime}</h1>
    </div>
  );
}
export default Clock;
