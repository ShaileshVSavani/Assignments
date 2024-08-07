import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilteredData from './FilteredData'

const ProductData = () => {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useSearchParams()

    const  getData = async() => {
        let res = await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
        console.log(res.data)
    }
    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        let sort = query.get('sort')
        let category = query.get('category')
        console.log(sort, category)

        if(sort ==="LTH"){
          let data = [...products]
          data = data.sort((a, b) => a.price - b.price)
          console.log(data)
          setProducts(data)
        }
        else{
            let data = [...products]
            data = data.sort((a, b) => b.price - a.price)
            console.log(data)
            setProducts(data)
            
        }
        if(category){
            let data = [...products]
            data = data.filter((item)=>item.category == category)
            console.log(data)
            setProducts(data)
        }
    },[query])
  return (
    <div>
        <FilteredData/>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow gap-9'>
        {products.map((ele)=>(
            <div key={ele.id}>
                <img src={ele.image} alt={ele.title} />
                <h3>{ele.title}</h3>
                <p>{ele.description}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default ProductData