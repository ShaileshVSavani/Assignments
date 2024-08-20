

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching the product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container mx-auto p-4 mt-4">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl  duration-500 ease-in-out hover:shadow-lg hover:scale-105">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-42 w-full object-contain md:h-full md:w-48 p-4 hover:scale-105 duration-500 ease-in-out"
              src={product.image}
              alt={product.title}
            />
          </div>
          <Link to={'/'}>
          <div className="p-8">
            <h3 className=" mt-1 text-lg leading-tight font-medium text-black">
              {product.title}
            </h3>
            <p className="mt-2 text-gray-500 text-justify">{product.description}</p>
            <p className="mt-2 text-gray-900 font-bold text-left">$ {product.price}</p>
            <p className="mt-2 text-gray-700 text-left">Category: {product.category}</p>
            {/* <div className="mt-2 flex items-center">
              <p className="text-yellow-500 mr-1">{product.rating.rate}</p>
              <span className="text-gray-600">
                ({product.rating.count} reviews)
              </span>
            </div> */}
            {product.rating && (
              <div className="mt-2 flex items-center">
                <p className="text-yellow-700 mr-1">{product.rating.rate}</p>
                <span className="text-gray-600">({product.rating.count} reviews)</span>
              </div>
            )}
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
