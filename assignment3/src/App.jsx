import React from 'react';
import './App.css';
import StyledComponent from './StyledComponent';

function App() {
  // const isStyled = true; 
  const isStyled = false; 

  return (
   
     <>
      <center><h1>Props</h1></center>
      
       <StyledComponent isStyled={isStyled} />
       
     </>
  
  );
}

export default App;

