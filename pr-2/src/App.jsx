import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputMinutes, setInputMinutes] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputMinutes(value);

    if (!isNaN(value) && value !== '') {
      const totalSeconds = parseInt(value) * 60;
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
      setStart(true);
    } else {
      setStart(false);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(timer);
              setStart(false);
            } else {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [start, hours, minutes, seconds]);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2>
        Minutes:
        <input type="number" value={inputMinutes} onChange={handleInputChange} />
      </h2>
      <div>
        <h2>Stopwatch Time:</h2>
        <h3>{hours} Hours : {minutes} Minutes : {seconds} Seconds</h3>
      </div>
    </div>
  );
}

export default App;
