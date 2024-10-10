import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Coun : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;
