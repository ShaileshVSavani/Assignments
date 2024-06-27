import React from 'react'

const Greetings = ({name="Have a nice day!!", color='red'}) => {
  return (
 
        <h2 style={{color:color}}>{name}</h2>
   
  )
}

export default Greetings