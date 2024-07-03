import React, { useState } from 'react';
import LoggerComponent from './LoggerComponent';

const App = () => {
  const [message, setMessage] = useState('Hello, World!');

  return (
    <div>
      <LoggerComponent  logMessage={message} />
      <button onClick={() => setMessage('New Message!')}>Change Message</button>
    </div>
  );
};

export default App;
