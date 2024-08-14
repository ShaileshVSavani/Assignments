import React, { createContext, useContext } from 'react'

export const BioContext = createContext()

const BioProvider = ({ children }) => {
    
    let  name ="react"
  return (
      <BioContext.Provider value={name }>
          {children}
     </BioContext.Provider>
  )
}

export default BioProvider