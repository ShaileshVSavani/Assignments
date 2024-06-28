

import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <h2>{text}</h2>
    </div>
  );
};

export default TextInput;
