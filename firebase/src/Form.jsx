import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './config'

const Form = () => {
    const [product, setProduct] = useState({ title : '', description: '', img:'', price: ''})
    const [productList, setProductList] = useState([])

    const handleProductInput = (e) => {
        let { name, value } = e.target
        setProduct({...product, [name]: value })
      }
      
      const handleProductSubmit = async(e) => {
        e.preventDefault()
        const data = await addDoc(collection(db, 'products'), product)
        // console.log(product)
        
      }

      const getProduct = async() => {
        let items = await getDocs(collection(db, 'products'))
        items.docs.map((item) => {
            console.log("item",item)
            console.log("Item",item.id, '=>', item.data());

            setProduct([...productList, {id:item.id, ...item.data()}])  // to make one object , id and data in the same object
            
        })
        console.log(items)
      }

      useEffect(() =>{
        getProduct()
      },[])

    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" placeholder="Product Title" name="title" value={product.title} onChange={handleProductInput} />
                <input type="text" placeholder="Product Description" name="description" value={product.description} onChange={handleProductInput} />
                <input type="url" placeholder="Product Image URL" name="img" value={product.img} onChange={handleProductInput} />
                <input type="number" placeholder="Product Price" name="price" value={product.price} onChange={handleProductInput} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default Form