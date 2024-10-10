import React, { useEffect, useRef } from "react";

const Ref = () => {
  let id = useRef();
  let name = useRef();
  useEffect(() => {
    id.current.focus();
  }, []);
  const handleData = () => {
    console.log(id.current.value);
    console.log(name.current.value);
  };
  return (
    <div>
      <input type="text" ref={id} />
      <input type="text" ref={name} />
      <button onClick={handleData}>submit</button>
    </div>
  );
};

export default Ref;
