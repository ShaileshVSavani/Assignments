import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';

const Counter_localStotage = () => {
    let [counter, setCounter] = useState(0)

    useEffect(() =>  {
       
        let val = Number(localStorage.getItem('counter')) || 0
        // if(!isNaN(val)) setCounter(val)
        setCounter(val)
    }, [])
    
    let handleCounter = (opr) => {
        if(opr === "+") {
            setCounter(counter + 1)
        } else if(opr === "-") {
            if(counter > 0) 
            setCounter(counter - 1)
        }
        localStorage.setItem("counter", counter)
    }
  return (
    
   <div bg="green">
     <h1>Counter</h1>
     <h2>Count: {counter}</h2>
     <Button variant="contained" color="success" onClick={() => handleCounter("+")}>
     Increment
      </Button>
      <Button variant="outlined" color="  
      </Button>
     {/* <button onClick={() => handleCounter("+")}>Increment</button> */}
     {/* <button onClick={() => handleCounter("-")}>Decrement</button> */}
   </div>
  )
}

export default Counter_localStotage