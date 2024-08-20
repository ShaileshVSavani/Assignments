

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import FilteredData from './FilteredData'
FilteredData

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [query, setQuery] = useSearchParams()

  const getData = async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data)
    setFilteredProducts(res.data) 
    console.log(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    let sort = query.get('sort')
    let category = query.get('category')
    let search = query.get('search')
    console.log(sort, category, search)

    let filtered = [...products]

    if (category) {
      filtered = filtered.filter((item) => item.category === category)
    }

    if (search) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (sort === "LTH") {
      filtered = filtered.sort((a, b) => a.price - b.price)
    }
    else {
      filtered = filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(filtered)
  }, [query, products])

  return (
    <div>
      <FilteredData />
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow gap-5 mt-5'>
        {filteredProducts.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="border p-4 rounded-lg shadow transition-transform duration-500 ease-in-out hover:shadow-lg hover:scale-105 flex flex-col h-full">
              <div className="flex justify-center items-center h-32 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain hover:scale-105 ease-in-out duration-500"
                />
              </div>
              <div className="flex-grow">
                <h3 className="mt-2 font-bold text-center">{item.title}</h3>
                <p className="mt-1 text-gray-700 text-center"> Price : $ {item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products


