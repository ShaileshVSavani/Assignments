import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState({});

  const getSingleProduct = async (id) => {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(res.data);
  };

  useEffect(() => {
    getSingleProduct(id);
  }, []);
  return (
    <div>
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
    </div>
  );
};

export default SingleProduct;
