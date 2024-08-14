import React, { useContext } from 'react'
import { BioContext } from '../contextProvider/Context'

const Home = () => {
    const name = useContext(BioContext)
  return (
      <div className=''>{ name}</div>
  )
}

export default Home