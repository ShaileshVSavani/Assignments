import axios from "axios";
import React from "react";

const Product = ({ id, title, price, description, image }) => {
  return (
    // <div>
    //   <img src={image} alt={title} />
    //   <h3>{title}</h3>
    //   <p>Price: ${price}</p>
    //   <p>{description}</p>
    // </div>

    <div className="card bg-base-100 w-96 shadow-xl ">
      <figure className="px-10 pt-10">
        <img src={image} alt="image" className=" p-2"  />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <button className="btn btn-outline-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
