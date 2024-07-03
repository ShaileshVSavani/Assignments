import React, { useEffect } from 'react';

const LoggerComponent = ({ logMessage }) => {
 
  useEffect(() => {
    console.log('Component mounted.');

    return () => {
      console.log('Component unmounted.');
    };
  }, []);

  useEffect(() => {
    console.log(`Prop changed to ${logMessage}`);
  }, [logMessage]);

  return (
    <div>
      <p>{logMessage}</p>
    </div>
  );
};

export default LoggerComponent;
