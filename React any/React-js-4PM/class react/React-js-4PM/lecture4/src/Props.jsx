import React from 'react'

const Props = ({name,number ,clr}) => {

  return (
    <div  style={{backgroundColor:clr}}>
      <h1>{name}</h1>
      <h2>{number}</h2>

    </div>
  )
}

export default Props