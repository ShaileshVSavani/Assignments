import React from "react";

const Item = ({ thumbnail, title, category, price }) => {
  return (
    <div>
      <img src={thumbnail} alt="" />
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{price}</p>
      <button>Buy</button>
    </div>
  );
};

export default Item;
