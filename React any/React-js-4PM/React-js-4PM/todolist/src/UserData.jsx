import React, { useEffect, useState } from "react";
import "./App.css";
const UserData = () => {
  let [product, setProduct] = useState({
    title: "",
    price: 0,
    img: "",
  });
  let [products, setProducts] = useState([]);
  const handleProductData = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("products"));
    if (data) {
      setProducts(data);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = [...products, product];
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
  };
  const handleDelete = (index) => {
    let data = products.filter((ele, i) => i != index);
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleProductData}
          value={product.title}
        />
        <input
          type="number"
          name="price"
          onChange={handleProductData}
          value={product.price}
        />
        <input
          type="url"
          name="img"
          onChange={handleProductData}
          value={product.img}
        />
        <input type="submit" value="add" />
      </form>
      <hr />
      <div className="parent-box">
        {products.map((ele, i) => (
          <div key={i}>
            <img src={ele.img} alt="" />
            <h2>{ele.title}</h2>
            <p>{ele.price}</p>
            <button onClick={() => handleDelete(i)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserData;
