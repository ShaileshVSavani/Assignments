import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      {timeLeft > 0 ? (
        <h3>Time left: {timeLeft} seconds</h3>
      ) : (
        <h3>Time's up!</h3>
      )}
    </div>
  );
};

export default CountdownTimer;
