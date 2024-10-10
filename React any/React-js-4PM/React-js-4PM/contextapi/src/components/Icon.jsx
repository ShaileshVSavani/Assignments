import React, { useContext } from 'react'
import { Dataprovider } from '../Provider/contextProvider'

const Icon = () => {
    let {changeMode}=useContext(Dataprovider)
  return (
    <div>
        <button onClick={changeMode}>change </button>
    </div>
  )
}

export default Icon