

import React, { useState } from 'react';

const DynamicList = ({ itm }) => {
  const [items, setItems] = useState([]);

  const handleAddItems = () => {
    setItems([...items, `${itm} ${items.length + 1}`]);
  };

  return (
    <div>
      <ol>
        <button onClick={handleAddItems}>Add Item</button>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default DynamicList;
