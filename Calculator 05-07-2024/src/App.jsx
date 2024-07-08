
import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  const handleCalculation = (operation) => { 
    // switch (operation) {
    //   case '+':
    //     setResult(Number(num1) + Number(num2))
    //     break
    //   case '-':
    //     setResult(Number(num1) - Number(num2))
    //     break
    //   case '*':
    //     setResult(Number(num1) * Number(num2))
    //     break
    //   case '/':
    //     if (num2 === '0') {
    //       alert('Cannot divide by zero')
    //       return
    //     }
    //     setResult(Number(num1) / Number(num2))
    //     break
    //   default:
    //     return
    // }
    if (operation === '+') { 
      setResult(Number(num1) + Number(num2))
    }
    if (operation === '-') { 
      setResult(Number(num1) - Number(num2))
    }
    if (operation === '*') { 
      setResult(Number(num1) * Number(num2))
    }
    if (operation === '/') { 
      if (num2 === '0') {
        alert('Cannot divide by zero')
        return
      }
      setResult(Number(num1) / Number(num2))
    }
  }

  return (
    <>
      <h1>Calculator</h1>
      <h2 style={{ color: result > 0 ? "red" : result==0 ? "orange":"green" }}>Result: {result}</h2>
      <input type="number"  placeholder="Enter first number"  onChange={(e) => setNum1(e.target.value)}/>
      <input type="number" placeholder="Enter second number"  onChange={(e) => setNum2(e.target.value)} />
      <br />
      <br />
      <button onClick={() => handleCalculation("+")}>Add</button>
      <button onClick={() => handleCalculation("-")}>Subtract</button>
      <button onClick={() => handleCalculation("*")}>Multiply</button>
      <button onClick={() => handleCalculation("/")}>Divide</button>
    </>
  )
}

export default App
