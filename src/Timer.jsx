import React, { useState, useEffect } from "react";

const Timer = () => {
  const [[mins, secs], setTime] = useState([20, 0]);
  const [meme, setMeme] = useState(false);
 
  const tick = () => {
    if (mins === 0 && secs === 0) setMeme(true);
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
      {
          meme && 
          <h1>Here is a meme</h1>
      }
    </div>
  );
};

export default Timer;
