
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)
  const [isStart, setIsStart] = useState(false)

  useEffect(() => { 
     console.log("mounted")
    let intervalId;
    if (isStart) {
      intervalId = setInterval(() => {
        // setSec((prevSec) => prevSec + 1);
        setSec(sec + 1)
        if (sec === 60) {
          setSec(0);
          // setMin((prevMin) => prevMin + 1);
          setMin(min + 1);
          
          if (min === 60) {
            setMin(0);
            // setHour((prevHour) => prevHour + 1);
            setHour(hour + 1);
            
            if (hour === 24) {
              setHour(0);
            }
          }
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isStart, sec])

  return (
    <>
      <h1>{hour} : {min} : {sec}</h1>
      <button onClick={() => setIsStart(!isStart)}>
        {isStart? 'Stop' : 'Start'}
      </button>
      <button onClick={() => { setSec(0), setMin(0), setHour(0), isStart(false); } }>Reset</button>
    </>
  )
}

export default App
