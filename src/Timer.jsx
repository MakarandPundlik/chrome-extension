
import React from 'react'

const Timer = () => {
   
    
    const [[hrs, mins, secs], setTime] = React.useState([0, 20, 0]);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(0), parseInt(20), parseInt(0)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
       <div className="timerContainer">
       <div className="header">
            Look at object 20 feet away for 20 seconds
        </div>
        <div className="timer">
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
       </div>
    );
}

export default Timer;