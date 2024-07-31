import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const ProductData = () => {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    try {
      // const response = await fetch('https://fakestoreapi.com/products')
      // const data = await response.json()
      let res = await axios.get("http://localhost:3000/user");
      let data = res.data;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log("Error fetching the products:", error);
    }
  };
  let postData =  async () => {
    // let data ={
    //   title :"react",
    //   price : 100,
    
    // }
    let res = await axios.post("http://localhost:3000/user", products).then(() => {
        console.log("Data Posted Successfully"),
        setProducts(res.data);
        // getProductData()
  
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    postData()

  }
  useEffect(() => {
    getProductData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProducts({...products, [name]: value });
  };

  return (
    <div>
      <div>
        <h2>Create Data</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Enter Title" value={products.title}  onChange={handleChange} />
          <br />
          <input type="number" name="price" placeholder="Enter Price" value={products.price} onChange={handleChange}/>
          <br />
          {/* <input type="url" placeholder='Entet Url'/> */}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="product">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductData;
