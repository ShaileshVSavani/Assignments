import React, { useState } from "react";

const Controll = () => {
  let [username, setUsername] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Controll;
