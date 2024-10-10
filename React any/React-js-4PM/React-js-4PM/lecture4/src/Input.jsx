import React, { useState } from "react";

const Input = () => {
  let [name, setName] = useState({
    name: "",
    number: "",
  });
  let [number, setNumber] = useState(0);
  let [nameList, setNameList] = useState([]);
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    let user = {
      name: name,
      number: number,
    };
    setNameList([...nameList, user]);
  };
  return (
    <div>
      <input type="text" placeholder="enter your name" onChange={handleName} />
      <input
        type="number"
        placeholder="enter your number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClick}>Enter</button>

      {nameList.map((ele) => (
        <div>
          <h1> {ele.name}</h1>
          <h2>{ele.number}</h2>
        </div>
      ))}
    </div>
  );
};

export default Input;
