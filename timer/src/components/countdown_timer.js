import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // initial time in seconds (1 hour)
  const initialTime = 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        // '===' is used to check if the values and value types are the same(true). else its (false)
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // when the timer hits 0, end the countdown, else, continue
          console.log('Countdown complete!');
          return 0;
        } else {
          return prevTime - 1;
        }
      });
      // interval of 1000ms
    }, 1000);

    // cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
    // The empty dependency array ensures the effect runs only once on mount
  }, []); 

  // convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <p>Countdown Timer:</p>
      <p>{`${hours}h ${minutes}m ${seconds}s`}</p>
    </div>
  );
};

export default CountdownTimer;