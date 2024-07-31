import axios from 'axios'
import React from 'react'

const Product = ({id, title, price, description,image}) => {
  const handleDelete = async() => {
    let res = await axios.delete(`http://localhost:3000/user/`).then(() =>{
      console.log('Deleted')

    })
  }
  return (

    <div>
     
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <button onClick={handleDelete}> Delete</button>
      
  
    </div>
  )
}

export default Product