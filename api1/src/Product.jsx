import React from 'react'


const Product = ({ id, title, price, image, description }) => {

  return (
    <div>
   
    <div className='item'>
        <center><img src={image} alt={title}/></center>
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
      <div className='text-center'>
      <button className='w-100 btn btn-outline-secondary'>Add to Cart</button>
       </div>
    </div>
   </div>
  )
}

export default Product



