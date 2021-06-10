import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Timer = (props) => {
  const location = useLocation();
  const isAuthenticated = location.isAuthenticated;
  const [[mins, secs], setTime] = useState([0, 20]);

  const tick = () => {
    if (mins === 0 && secs === 0) {
      props.history.push({
        pathname: "/meme",
        isAuthenticated: true,
      });
    } else if (secs === 0) setTime([mins - 1, 59]);
    else setTime([mins, secs - 1]);
  };

  useEffect(() => {
    if (!isAuthenticated) props.history.push("/");
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="timerContainer">
      <div className="header">Look at object 20 feet away for 20 seconds</div>
      <div className="timer">
        <p>{`${secs
          .toString()
          .padStart(2, "0")}S`}</p>
      </div>
    </div>
  );
};

export default Timer;
