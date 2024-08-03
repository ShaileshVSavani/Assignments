

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [carts, setCarts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchItem, setSearchItem] = useState("");

 
  const getProduct = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setCarts(res.data);
  };


  const getCategories = async () => {
    let res = await axios.get("https://fakestoreapi.com/products/categories");
    console.log(res.data);
    setCategories(res.data);
  };

  useEffect(() => {
    getProduct();
    getCategories();
  }, []);


  const handleSortby = (sortedBy) => {
    let sortedCarts = [...carts];
    if (sortedBy === "htl") {
      sortedCarts.sort((a, b) => b.price - a.price);
    }
    else {
      sortedCarts.sort((a, b) => a.price - b.price);
    }
    setCarts(sortedCarts);
  };

 
  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };


  const resetSearch = () => {
    setSearchItem("");
    setSelectedCategory("");
  };


  const filteredCarts = carts.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchItem.toLowerCase());
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="mb-2 flex justify-between items-center">
        <div>
          <button
            className="btn btn-outline btn-success"
            onClick={() => handleSortby("htl")}
          >
            HTL
          </button>
          <button
            className="btn btn-outline btn-warning ms-2"
            onClick={() => handleSortby("lth")}
          >
            LTH
          </button>
          <button
            className="btn btn-outline btn-primary ms-2"
            onClick={resetSearch}
          >
            All
          </button>
          <div className="inline ms-2">
            <select
              className="px-3 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-3 bg-gray-700 text-white text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCarts.map((item) => (
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
                <p className="mt-1 text-gray-700 text-center">${item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
