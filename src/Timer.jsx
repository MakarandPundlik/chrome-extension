import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [[mins, secs], setTime] = useState([20, 20]);
  const[timeout,setTimeout] = useState(false);
  const tick = () => {
    if (mins === 0 && secs === 0) {
      setTime([20,20]);
      props.history.push("/meme")
    }
    else if (secs === 0) setTime([mins - 1, 59]);
    else setTime([mins, secs - 1]);
  };

  
  useEffect(() => {
   
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="timerContainer">
      <div className="header">Look at object 20 feet away for 20 seconds</div>
      <div className="timer">
        <p>{`${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`}</p>
      </div>
    </div>
  );
};

export default Timer;
