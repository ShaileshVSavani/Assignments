import React, { useEffect, useState } from 'react'
import Product from './Product'

const Api = () => {
    let [products, setProducts] =useState([])
    const getProductData = async() =>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProducts(data)
    }
    useEffect(() =>{
        getProductData()
    },[])
    
  return (
    <div className='product'>
        {products.map(product => <Product {...product} key={product.id}/>)}
    </div>
  )
}

export default Api