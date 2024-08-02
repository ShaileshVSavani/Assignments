import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const ProductData = () => {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });
  const [products, setProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const getProductData = async () => {
    try {
      let res = await axios.get("http://localhost:3000/user");
      let data = res.data;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log("Error fetching the products:", error);
    }
  };

  const postData = async () => {
    try {
      await axios.post("http://localhost:3000/user", product);
      console.log("Data Posted Successfully");
      getProductData();
    } catch (error) {
      console.log("Error posting the product:", error);
    }
  };

  const updateData = async (id) => {
    try {
      await axios.put(`http://localhost:3000/user/${id}`, product);
      console.log("Data Updated Successfully");
      getProductData();
    } catch (error) {
      console.log("Error updating the product:", error);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      console.log("Data Deleted Successfully");
      getProductData();
    } catch (error) {
      console.log("Error deleting the product:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, description, image } = product;
    if (title === "" || price === "" || description === "" || image === "") {
      alert("Please fill all the fields");
      return;
    }
    if (isEdit) {
      updateData(editId);
    } else {
      postData();
    }
    setProduct({ title: "", image: "", price: "", description: "" });
    setIsEdit(false);
    setEditId(null);
  };

  const handleEditData = (product) => {
    setProduct(product);
    setIsEdit(true);
    setEditId(product.id);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <div className="form-data">
        <h2>{isEdit ? "Edit Product" : "Create Product"}</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="mt-2 ">
            <input
              className="w-100 p-1 rounded border-1"
              type="text"
              name="title"
              placeholder="Enter Title"
              value={product.title}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <input
              className="w-100 p-1 rounded border-1"
              type="number"
              name="price"
              placeholder="Enter Price"
              value={product.price}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <input
              className="w-100 p-1 rounded border-1"
              type="url"
              name="image"
              placeholder="Enter Image URL"
              value={product.image}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <input
              className="w-100 p-1 rounded border-1"
              type="text"
              name="description"
              placeholder="Enter Description"
              value={product.description}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2 mb-2 ">
            <button className="btn btn-outline-secondary">
              {isEdit ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="product">
        {products.map((product) => (
          <div key={product.id} className="item">
            <Product {...product} />
            <button
              className="btn btn-outline-success w-50 mt-2"
              onClick={() => handleEditData(product)}
            >
              Edit
            </button>
           
            <button
              className="btn btn-outline-warning w-50 mt-2"
              onClick={() =>
                window.confirm("Are you sure you want to delete this?")
                  ? handleDeleteData(product.id)
                  : null
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductData;
