import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [inputMinutes, setInputMinutes] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputMinutes(value);

    if (!isNaN(value) && value !== '' && value > 0) {
      const totalSeconds = parseInt(value) * 60;
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
      // setStart(true);
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
      <h1>Timer</h1>
      <h2> 
        <input type="number" placeholder='Enter Minutes' value={inputMinutes} onChange={handleInput} />
        {/* <input type="number"  onChange={handleInputChange} /> */}
      </h2>
    
        <h3>{hours} Hours : {minutes} Minutes : {seconds} Seconds</h3>
        <button className={`btn ${start ? 'btn-danger' : 'btn-success'} , me-2`} onClick={() => setStart(!start)}>
          {start? 'Stop' : 'Start'}
        </button>
        <button className="btn btn-warning" onClick={() => { setStart(false); setHours(0); setMinutes(0); setSeconds(0); setInputMinutes(''); }}>Reset</button>
    
    </div>
  );
}

export default App;
