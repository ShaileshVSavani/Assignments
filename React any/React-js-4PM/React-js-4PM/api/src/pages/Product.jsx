import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/product.css";
import { Link, useSearchParams } from "react-router-dom";
import Filters from "../components/Filters";
const Product = () => {
  let [query, setQuery] = useSearchParams();

  let [products, setProducts] = useState([]);

  let [list, setList] = useState([]);

  const getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log("res", res);

      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sortBy = (orderBy) => {
    let data = [...products];
    if (orderBy == "LTH") {
      data = data.sort((a, b) => a.price - b.price);
      setList(data);
    } else {
      data = data.sort((a, b) => b.price - a.price);
      setList(data);
    }
  };

  const filterByCategory = (category) => {
    let data = [...products];
    data = data.filter((ele) => ele.category == category);
    setList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    let sort = query.get("sort");
    let category = query.get("category");

    if (sort) {
      sortBy(sort);
    }
    if (category) {
      filterByCategory(category);
    }

    console.log(sort, category);
    
    if (sort==null && category==null) {
      setList(products);
    }
  }, [query]);

  return (
    <div id="products">
      <div>
        <Filters />
      </div>

      {list.map((ele) => (
        <Link to={`/product/${ele.id}`}>
          <div>
            <img src={ele.image} alt="" />
            <h3>{ele.title}</h3>
            <h4>{ele.price}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
