import React, { useEffect, useState } from 'react'
import Product from './Product'

const Api = () => {
    const [products, setProducts] = useState([])

    const getProductData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log('Error fetching the products:', error)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    const handleSort = (sortBy) => {
        let sortedProducts = []
        if (sortBy === 'ASC') {
            console.log("Sort by ascending")
            sortedProducts = [...products].sort((a, b) => a.price - b.price)
        } else if (sortBy === 'DESC') {
            console.log("Sort by descending")
            sortedProducts = [...products].sort((a, b) => b.price - a.price)
        }
        setProducts(sortedProducts)
    }

    return (
        <div>
            <button onClick={() => handleSort("ASC")}>ASC</button>
            <button onClick={() => handleSort("DESC")}>DESC</button>
            <div className='product'>
                {products.map(product => <Product {...product} key={product.id} />)}
            </div>
        </div>
    )
}

export default Api


