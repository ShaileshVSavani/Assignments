

// import React from 'react'
// import { useSearchParams } from 'react-router-dom'

// const FilteredData = () => {
//   const [query, setQuery] = useSearchParams();

//   const handleSearch = (e) => {
//     setQuery({ search: e.target.value });
//   };

//   return (
//     <div className='mb-5'>
//       <button className="btn btn-outline btn-info mx-1 mt-2" onClick={() => setQuery({})}>ALL</button>
//       <button className="btn btn-outline mx-1 mt-2" onClick={() => setQuery({ sort: "LTH" })}>LTH</button>
//       <button className="btn btn-outline btn-primary mx-1 mt-2" onClick={() => setQuery({ sort: "HTL" })}>HTL</button>
//       <button className="btn btn-outline btn-secondary mx-1 mt-2" onClick={() => setQuery({ category: "electronics" })}>Electronics</button>
//       <button className="btn btn-outline btn-accent mx-1 mt-2" onClick={() => setQuery({ category: "jewelery" })}>Jewelery</button>
//       <button className="btn btn-info mx-1 mt-2" onClick={() => setQuery({ category: "women's clothing" })}>Women's clothing</button>
//       <button className="btn btn-warning mx-1 mt-2" onClick={() => setQuery({ category: "men's clothing" })}>Men's clothing</button>
//       <input
//         type="text"
//         placeholder="Search"
//         className="input input-bordered mx-1 mt-2"
//         onChange={handleSearch}
//       />
//     </div>
//   );
// };

// export default FilteredData;



import React from 'react';
import { useSearchParams } from 'react-router-dom';

const FilteredData = () => {
  const [query, setQuery] = useSearchParams();

  const handleSearch = (e) => {
    setQuery({ search: e.target.value });
  };

  return (
    <div className='my-4 flex flex-wrap items-center space-x-2 '>
      <button className="btn btn-outline btn-info h-12" onClick={() => setQuery({})}>ALL</button>
      <button className="btn btn-outline h-12" onClick={() => setQuery({ sort: "LTH" })}>LTH</button>
      <button className="btn btn-outline btn-primary h-12" onClick={() => setQuery({ sort: "HTL" })}>HTL</button>
      <button className="btn btn-outline btn-secondary h-12" onClick={() => setQuery({ category: "electronics" })}>Electronics</button>
      <button className="btn btn-outline btn-accent h-12" onClick={() => setQuery({ category: "jewelery" })}>Jewelery</button>
      <button className="btn btn-info h-12" onClick={() => setQuery({ category: "women's clothing" })}>Women's clothing</button>
      <button className="btn btn-warning h-12" onClick={() => setQuery({ category: "men's clothing" })}>Men's clothing</button>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered h-12"
        onChange={handleSearch}
      />
    </div>
  );
};

export default FilteredData;
