import React, { useContext } from 'react'
import { ProductContext } from '../provider/ContextProvider'

const Home = () => {
   let {name} = useContext(ProductContext)
  return (
    <div>{name}</div>
  )
}

export default Home