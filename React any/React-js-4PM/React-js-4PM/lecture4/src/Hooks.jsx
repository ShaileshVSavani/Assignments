import React, { useEffect, useState } from "react";

const Hooks = () => {
  let [min, setMin] = useState(0);
  let [sec, setSec] = useState(0);
  let [hour, setHour] = useState(0);
  let [start, setStart] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      if (start) {
        setSec(sec + 1);
        if (sec == 59) {
          setSec(0);
          setMin(min + 1);
        }

        if (min == 59) {
          setMin(0);
          setHour(hour + 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [start, sec]);


  useEffect(()=>{},[])

  return (
    <div>
      <h1>
        {hour} : {min} : {sec}
      </h1>
      <button onClick={() => setStart(!start)}>
        {start == true ? "stop" : "start"}
      </button>
      <button onClick={() => setStart(false)}>stop</button>
      <button
        onClick={() => {
          setStart(false);
          setHour(0);
          setMin(0);
          setSec(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Hooks;
