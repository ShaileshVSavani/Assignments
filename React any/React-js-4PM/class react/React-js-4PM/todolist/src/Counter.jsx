import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    let val = Number(localStorage.getItem("counter"));
    setCounter(val);
  }, []);

  const handleCounter = (opr) => {
    opr == "+"
      ? setCounter((prev) => prev + 1)
      : setCounter((prev) => prev - 1);
    console.log(counter);
    localStorage.setItem("counter", counter);
  };

  return (
    <div>
      <h1>count : {counter}</h1>

      <Button variant="contained" onClick={() => handleCounter("+")}>
        add
      </Button>

      <br />
      <button onClick={() => handleCounter("-")}>remove</button>
    </div>
  );
};

export default Counter;
