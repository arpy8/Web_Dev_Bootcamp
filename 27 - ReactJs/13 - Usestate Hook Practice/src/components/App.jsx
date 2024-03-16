import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [playTimeBool, setPlayTime] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (playTimeBool) {
      const id = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      setIntervalId((prevId) => {
        // Clear the previous interval before updating to the new one
        prevId && clearInterval(prevId);
        return id;
      });
    } else {
      clearInterval(intervalId);
      setTime("Paused");
    }

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [playTimeBool]);

  function playTime() {
    setPlayTime((prevPlayTime) => !prevPlayTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={playTime}>Toggle Time</button>
    </div>
  );
}

export default App;