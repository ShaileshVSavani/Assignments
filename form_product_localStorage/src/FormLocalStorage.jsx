import React, { useEffect, useState } from "react";

const FormLocalStorage = () => {
  const [product, setProduct] = useState({
    title: "",
    img: "",
    price: 0,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products"));
    if (data) setProducts(data);
  }, []);

  const handleProduct = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.title === "" || product.img === "" || product.price === 0) {
      alert("Please fill all fields");
      return;
    }
    let data = [...products, product]; 
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
    setProduct({ title: "", img: "", price: 0 });
  };
  const handleDelete = (index) => {
    const updatedProducts = products.filter((ele, i) => i!== index);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col bg-grey-950 justify-around	w-1/4 m-auto border-2 p-3 rounded-lg">
        <input
          className="border-2 my-2 p-2 rounded-lg outline-none"
          type="text"
          name="title"
          placeholder="Enter title"
          value={product.title}
          onChange={handleProduct}
        />
        <input
         className="border-2 my-2 p-2 rounded-lg outline-none"
          type="url"
          name="img"
          placeholder="Enter Url"
          value={product.img}
          onChange={handleProduct}
        />
        <input
         className="border-2 my-2 p-2 rounded-lg outline-none"
          type="number"
          name="price"
          placeholder="Enter Price"
          value={product.price}
          onChange={handleProduct}
        />
        <button type="submit">Submit</button>
      </form>
    <br />
      <hr /> 
      <br />
      <div className="item">
        {products.map((item, index) => (    
          <div key={index} className="border-2 p-2 rounded-lg  m-2">
            <img src={item.img} />
            <h2>{item.title}</h2>
            <p>Price: $ {item.price}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FormLocalStorage;
