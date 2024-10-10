import React, { useContext } from 'react'
import { Dataprovider } from '../Provider/contextProvider'

const User = () => {
    let {data}=useContext(Dataprovider)
    console.log(data);
    
  return (
    <div>

        <h1>user Page</h1>

        {
            data.map((ele)=>(
                <p>{ele.username}</p>
            ))
        }
    </div>
  )
}

export default User