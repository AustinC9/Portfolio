import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && time == 0 && (
          <button className='btn btn-success' onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button className='btn btn-danger' onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time !== 0 && (
          <button className='btn btn-success' onClick={() => setTimerOn(true)}>Resume</button>
        )}
        {!timerOn && time > 0 && (
          <button className='btn btn-danger' onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
