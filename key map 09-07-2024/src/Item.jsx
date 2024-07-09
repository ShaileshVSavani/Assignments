import React from 'react'

const Item = ({title, description, category, discountPercentage, rating, brand,images,price}) => {
  return (
    <div className='my-3 shadow-sm p-3 item rounded-4'>
        <center><h2>{title}</h2>
        <img  src={images} alt={title} />
        </center>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: $. {price}</p>
        <p>Discount Percentage: {discountPercentage}%</p>
        <p>Rating: {rating}/5</p>
        <center><button>Buy Now</button></center>
      </div>
   
  )
}

export default Item