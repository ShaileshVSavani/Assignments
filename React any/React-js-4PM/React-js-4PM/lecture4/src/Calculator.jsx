import React from "react";
import { useState } from "react";

const Calculator = () => {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setRresult] = useState(null);

  const handleCalculation = (opr) => {
    if (opr == "+") {
      setRresult(Number(num1) + Number(num2));
    } else if (opr == "-") {
      setRresult(Number(num1) - Number(num2));
    } else if (opr == "*") {
      setRresult(Number(num1) * Number(num2));
    } else if (opr == "/") {
      setRresult(Number(num1) / Number(num2));
    }
  };
  return (
    <div>
      <h1>Calculator</h1>
      <h1
        style={{ color: result < 0 ? "red" : result == 0 ? "grey" : "green" }}
      >
        {result}
      </h1>
      <input
        type="number"
        placeholder="enter num1"
        onChange={(e) => setNum1(e.target.value)}
      />
      <span> </span>
      <input
        type="number"
        placeholder="enter num2"
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => handleCalculation("+")}> +</button>
      <button onClick={() => handleCalculation("-")}>-</button>
      <button onClick={() => handleCalculation("*")}>*</button>
      <button onClick={() => handleCalculation("/")}>/</button>
    </div>
  );
};

export default Calculator;
