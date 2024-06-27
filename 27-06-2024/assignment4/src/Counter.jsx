import React, { useState } from 'react';

const Counter = ({ initialVal, add, sub, style }) => {
  const [count, setCount] = useState(initialVal);

  const handleIncrement = () => {
    setCount(count + add);
  };

  const handleDecrement = () => {
    setCount(count - sub);
  };

  return (
    <div style={style} className='counter'>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
